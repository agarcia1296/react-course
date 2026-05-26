import { useState } from "react";
import { NavLink } from "react-router";
import { HomeButton } from "../../utils/HomeButton";
import "./Auth.css";

export function SignupPage() {
  const [isArtistAccount, setIsArtistAccount] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup submitted");
  };

  return (
    <>
      <HomeButton />

      <div className="auth-page">
        <div className="auth-card auth-card-large">
          <h1>Create Account</h1>

          <form onSubmit={handleSubmit}>
            {/* =========================
                Standard Account Fields
            ========================= */}

            <label>Email</label>

            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>

            <input type="password" placeholder="Create a password" required />

            <label>Confirm Password</label>

            <input type="password" placeholder="Confirm password" required />

            {/* =========================
                Artist Account Toggle
            ========================= */}

            <div className="checkbox-row">
              <input
                id="artist-account"
                type="checkbox"
                checked={isArtistAccount}
                onChange={() => setIsArtistAccount(!isArtistAccount)}
              />

              <label htmlFor="artist-account" className="checkbox-label">
                Create an Artist Account
              </label>
            </div>

            {/* =========================
                Expanded Artist Fields
            ========================= */}

            {isArtistAccount && (
              <div className="artist-fields">
                <h2>Artist Information</h2>

                <p className="artist-section-description">
                  Create a verified artist profile to submit official releases,
                  manage metadata, and connect your catalog to the marketplace.
                </p>

                <label>Artist / Band Name</label>

                <input type="text" placeholder="Enter artist or band name" />

                <label>Artist Type</label>

                <select>
                  <option>Solo Artist</option>
                  <option>Band</option>
                  <option>Producer</option>
                  <option>Label</option>
                </select>

                <label>Primary Genre</label>

                <input type="text" placeholder="Hip-Hop, Indie Rock, Jazz..." />

                <label>Country / Region</label>

                <input type="text" placeholder="United States" />

                <label>Official Website</label>

                <input type="url" placeholder="https://yourwebsite.com" />

                <div className="artist-link-section">
                  <h3>Streaming Platforms</h3>

                  <input type="url" placeholder="Spotify Artist URL" />
                  <input type="url" placeholder="Apple Music Artist URL" />
                  <input type="url" placeholder="Bandcamp URL" />
                </div>

                <div className="artist-link-section">
                  <h3>Social Media</h3>

                  <input type="url" placeholder="Instagram URL" />
                  <input type="url" placeholder="TikTok URL" />
                  <input type="url" placeholder="YouTube Channel URL" />
                </div>

                <label>Short Artist Bio</label>

                <textarea
                  rows="5"
                  placeholder="Tell the community about your music..."
                ></textarea>

                <div className="checkbox-row">
                  <input id="rights-confirmation" type="checkbox" required />

                  <label
                    htmlFor="rights-confirmation"
                    className="checkbox-label"
                  >
                    I confirm I own or represent the rights to the music
                    submitted under this account.
                  </label>
                </div>
              </div>
            )}

            <button type="submit" className="primary-btn">
              Create Account
            </button>
          </form>

          <div className="auth-links">
            <NavLink to="/login">Already have an account? Sign In</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
