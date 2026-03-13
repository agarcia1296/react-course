import { useState } from "react";
import "./NavbarMenu.css";
import "../pages/home/HomePage.css";

export function NavbarMenu() {
  const [activeMenu, setActiveMenu] = useState(null);

  function toggleMenu(menu) {
    setActiveMenu(activeMenu === menu ? null : menu);
  }

  function closeMenu() {
    setActiveMenu(null);
  }

  return (
    <>
      {activeMenu && <div className="menu-overlay" onClick={closeMenu}></div>}

      <div className="navbar">
        {/* Genre */}
        <div
          className={`menu-item left-align ${
            activeMenu === "genre" ? "active" : ""
          }`}
          onClick={() => toggleMenu("genre")}
        >
          <button className="category-button">
            Genre
            <img
              className="down-arrow"
              src="/images/icons/down-arrow-orange.png"
            />
          </button>
          {activeMenu === "genre" && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Popular Genres</h4>
                <a>Rock</a>
                <a>Hip-Hop</a>
                <a>Electronic</a>
                <a>Jazz</a>
              </div>
              <div className="dropdown-column">
                <h4>More Genres</h4>
                <a>Metal</a>
                <a>Punk</a>
                <a>Indie</a>
                <a>Folk</a>
              </div>
            </div>
          )}
        </div>

        {/* Decade */}
        <div
          className={`menu-item left-align ${
            activeMenu === "decade" ? "active" : ""
          }`}
          onClick={() => toggleMenu("decade")}
        >
          <button className="category-button">
            Decade
            <img
              className="down-arrow"
              src="/images/icons/down-arrow-orange.png"
            />
          </button>
          {activeMenu === "decade" && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Popular Genres</h4>
                <a>Rock</a>
                <a>Hip-Hop</a>
                <a>Electronic</a>
                <a>Jazz</a>
              </div>
              <div className="dropdown-column">
                <h4>More Genres</h4>
                <a>Metal</a>
                <a>Punk</a>
                <a>Indie</a>
                <a>Folk</a>
              </div>
            </div>
          )}
        </div>

        {/* Record Label */}
        <div
          className={`menu-item left-align ${
            activeMenu === "label" ? "active" : ""
          }`}
          onClick={() => toggleMenu("label")}
        >
          <button className="category-button">
            Record Label
            <img
              className="down-arrow"
              src="/images/icons/down-arrow-orange.png"
            />
          </button>
          {activeMenu === "label" && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Popular Genres</h4>
                <a>Rock</a>
                <a>Hip-Hop</a>
                <a>Electronic</a>
                <a>Jazz</a>
              </div>

              <div className="dropdown-column">
                <h4>More Genres</h4>
                <a>Metal</a>
                <a>Punk</a>
                <a>Indie</a>
                <a>Folk</a>
              </div>
              <div className="dropdown-column">
                <h4>More Genres</h4>
                <a>Metal</a>
                <a>Punk</a>
                <a>Indie</a>
                <a>Folk</a>
              </div>
            </div>
          )}
        </div>

        {/* Best Sellers */}
        <div
          className={`menu-item left-align ${
            activeMenu === "best" ? "active" : ""
          }`}
          onClick={() => toggleMenu("best")}
        >
          <button className="category-button">
            Best Sellers
            <img
              className="down-arrow"
              src="/images/icons/down-arrow-orange.png"
            />
          </button>
          {activeMenu === "best" && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Popular Genres</h4>
                <a>Rock</a>
                <a>Hip-Hop</a>
                <a>Electronic</a>
                <a>Jazz</a>
              </div>
              <div className="dropdown-column">
                <h4>More Genres</h4>
                <a>Metal</a>
                <a>Punk</a>
                <a>Indie</a>
                <a>Folk</a>
              </div>
              <div className="dropdown-column">
                <h4>More Genres</h4>
                <a>Metal</a>
                <a>Punk</a>
                <a>Indie</a>
                <a>Folk</a>
              </div>
            </div>
          )}
        </div>

        {/* Merch */}
        <div
          className={`menu-item left-align ${
            activeMenu === "merch" ? "active" : ""
          }`}
          onClick={() => toggleMenu("merch")}
        >
          <button className="category-button">
            Merch
            <img
              className="down-arrow"
              src="/images/icons/down-arrow-orange.png"
            />
          </button>
          {activeMenu === "merch" && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Popular Genres</h4>
                <a>Rock</a>
                <a>Hip-Hop</a>
                <a>Electronic</a>
                <a>Jazz</a>
              </div>
              <div className="dropdown-column">
                <h4>More Genres</h4>
                <a>Metal</a>
                <a>Punk</a>
                <a>Indie</a>
                <a>Folk</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
