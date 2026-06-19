import axios from "axios";

const BASE_URL = "https://musicbrainz.org/ws/2";

const headers = {
  "User-Agent": "PressPlayMarketplace/1.0 (your@email.com)"
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export async function searchArtist(name) {
  const res = await axios.get(`${BASE_URL}/artist`, {
    params: {
      query: `artist:${name}`,
      fmt: "json"
    },
    headers
  });

  return res.data.artists[0];
}


async function getAlbums(artistId) {
  const res = await axios.get(`${BASE_URL}/release-group`, {
    params: {
      artist: artistId,
      fmt: "json"
    },
    headers
  });

  const EXCLUDED = ["Live", "Compilation", "Remix", "DJ-mix"];

  return res.data["release-groups"]
    .filter(rg =>
      rg["primary-type"] === "Album" &&
      !rg["secondary-types"]?.some(t => EXCLUDED.includes(t))
    );
}


async function getBestRelease(releaseGroupId) {
  const res = await axios.get(`${BASE_URL}/release`, {
    params: {
      "release-group": releaseGroupId,
      fmt: "json"
    },
    headers
  });

  const releases = res.data.releases;

  // Strategy: pick earliest official release
  const sorted = releases
    .filter(r => r.status === "Official")
    .sort((a, b) => (a.date || "").localeCompare(b.date || ""));

  return sorted[0] || releases[0];
}


function getTracksFromMedia(media = []) {
  return media.flatMap(m =>
    (m.tracks || []).map(track => ({
      title: track.title,
      duration: track.length
        ? Math.floor(track.length / 1000)
        : null
    }))
  );
}


async function getTracks(releaseId) {
  const res = await axios.get(`${BASE_URL}/release/${releaseId}`, {
    params: {
      inc: "recordings",
      fmt: "json"
    },
    headers
  });

  const media = res.data.media || [];

  return media.flatMap(m =>
    (m.tracks || []).map(track => ({
      title: track.title,
      duration: track.length
        ? Math.floor(track.length / 1000)
        : null
    }))
  );
}


async function buildArtistMetadata(artistName) {
  const artist = await searchArtist(artistName);

  await sleep(1000);

  const albums = await getAlbums(artist.id);

  const enrichedAlbums = [];

  for (const album of albums.slice(0, 10)) { // limit for now
    await sleep(1000);

    const release = await getBestRelease(album.id);
    if (!release) continue;

    await sleep(1000);

    const tracks = await getTracks(release.id);

    enrichedAlbums.push({
      id: album.id,
      title: album.title,
      releaseYear: album["first-release-date"]?.slice(0, 4) || null,
      tracks
    });
  }

  return {
    artist: {
      id: artist.id,
      name: artist.name
    },
    albums: enrichedAlbums
  };
}


async function getReleases(releaseGroupId) {
  const res = await axios.get(`${BASE_URL}/release`, {
    params: {
      "release-group": releaseGroupId,
      fmt: "json"
    },
    headers
  });

  return res.data.releases;
}

function filterImportantReleases(releases) {
  return releases.filter(r => {
    const title = r.title.toLowerCase();

    return (
      r.status === "Official" &&
      (
        title.includes("deluxe") ||
        title.includes("edition") ||
        title.includes("expanded") ||
        title !== "" // keep base album too
      )
    );
  });
}


(async () => {
  const artist = await searchArtist("Olivia Rodrigo");
  console.log(artist);
})();

(async () => {
  const data = await buildArtistMetadata("Geese");
  console.log(JSON.stringify(data, null, 2));
})();


// (async () => {
//   const releaseGroupId = "83920a38-e749-4bbf-a7f6-8aaf77cb9475"; // example album

//   await sleep(1000);

//   const releases = await getReleases(releaseGroupId);

//   const importantReleases = filterImportantReleases(releases);

//   // ✅ Basic log
//   console.log("Important Releases:");
//   console.log(importantReleases);

//   // ✅ Cleaner, readable log
//   console.log(
//     JSON.stringify(
//       importantReleases.map(r => ({
//         id: r.id,
//         title: r.title,
//         date: r.date,
//         country: r.country
//       })),
//       null,
//       2
//     )
//   );
// })();

