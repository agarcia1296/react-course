import { Header } from "../../components/Header";
import { NavbarMenu } from "../../components/NavbarMenu";
import { HelpfulLinks } from "../../components/HelpfulLinks";
import "./CommunityPage.css";

export function CommunityPage({ cart }) {
  const submissionOptions = [
    {
      title: "Artist Accounts",
      description:
        "Artists, labels, and managers can create verified accounts to submit official releases, upload cover art, and manage album metadata.",
      benefits: [
        "Verified artist badge",
        "Official tracklists and credits",
        "Upcoming release submissions",
        "Direct links to artist storefronts",
      ],
      buttonText: "Create Artist Account",
    },
    {
      title: "Community Contributors",
      description:
        "Collectors can add missing vinyl, CDs, cassettes, and special editions that are not yet in the marketplace database.",
      benefits: [
        "Submit missing releases",
        "Add pressing and format details",
        "Earn contributor reputation",
        "Help build the catalog",
      ],
      buttonText: "Join the Community",
    },
  ];

  const submissionFields = [
    "Artist Name",
    "Album Title",
    "Release Date",
    "Tracklist",
    "Format",
    "Edition Details",
    "Catalog Number",
    "Cover Art",
  ];

  const reviewSteps = [
    {
      step: "1",
      title: "Search the Catalog",
      description:
        "Verify the release does not already exist in the marketplace database.",
    },
    {
      step: "2",
      title: "Submit Metadata",
      description:
        "Add album details, tracklists, format information, and artwork.",
    },
    {
      step: "3",
      title: "Community Verification",
      description:
        "Moderators and contributors review submissions for accuracy and duplicates.",
    },
    {
      step: "4",
      title: "Catalog Approval",
      description:
        "Approved releases become searchable and available on the marketplace.",
    },
  ];

  return (
    <>
      <title>Community Submissions - PressPlay Marketplace</title>
      <link rel="icon" type="image/svg+xml" href="pressplay-home.svg" />

      <Header cart={cart} />

      <main className="community-page">
        {/* =========================
            HERO SECTION
        ========================= */}
        <section className="community-hero">
          <div className="community-hero-content">
            <p className="community-eyebrow">PressPlay Marketplace</p>

            <h1>
              Build the Definitive Marketplace for Vinyl, CDs, and Music
              Collectors
            </h1>

            <p className="community-hero-description">
              Artists can submit official releases directly to the marketplace,
              while collectors and contributors can help document rare editions,
              vinyl pressings, deluxe albums, and missing catalog entries.
            </p>
          </div>
        </section>

        {/* =========================
            ACCOUNT TYPES
        ========================= */}
        <section className="submission-options">
          {submissionOptions.map((option) => (
            <article key={option.title} className="submission-card">
              <h2>{option.title}</h2>

              <p>{option.description}</p>

              <ul>
                {option.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>

              <button className="primary-button">{option.buttonText}</button>
            </article>
          ))}
        </section>

        {/* =========================
            REQUIRED DATA
        ========================= */}
        <section className="submission-requirements">
          <div className="requirements-card">
            <h2>Required Submission Data</h2>

            <p>
              Every submission should include enough metadata to properly
              identify the release and differentiate variants, editions, and
              formats.
            </p>

            <ul>
              {submissionFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* =========================
            REVIEW PROCESS
        ========================= */}
        <section className="review-process">
          <h2>How the Submission Process Works</h2>

          <div className="review-grid">
            {reviewSteps.map((step) => (
              <article key={step.step} className="review-card">
                <span className="review-step-number">{step.step}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            SUBMISSION FORM
        ========================= */}
        <section className="submission-form-preview">
          <h2>Submit a New Release</h2>

          <p>
            If a release is missing from the PressPlay Marketplace database, you
            can submit it for moderator and community review.
          </p>

          <form className="community-form">
            <input type="text" placeholder="Artist Name" />

            <input type="text" placeholder="Album Title" />

            <input type="date" />

            <select defaultValue="">
              <option value="" disabled>
                Select Format
              </option>

              <option>Vinyl</option>
              <option>CD</option>
              <option>Cassette</option>
            </select>

            <textarea
              rows="6"
              placeholder="Tracklist, edition notes, pressing information, barcode, catalog number, and other relevant metadata"
            />

            <button type="submit" className="primary-button">
              Submit for Review
            </button>
          </form>
        </section>
      </main>

      <HelpfulLinks />
    </>
  );
}
