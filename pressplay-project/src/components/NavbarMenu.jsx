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
      {/* Grey page overlay */}
      {activeMenu && <div className="menu-overlay" onClick={closeMenu}></div>}
      <div className="navbar">
        <div
          className={`menu-item ${activeMenu === "genre" ? "active" : ""}`}
          onClick={() => toggleMenu("genre")}
        >
          Genre ▾
        </div>
        <div className="category-button">
          <button className="category-button">
            Decade
            <img
              className="down-arrow"
              src="images/icons/down-arrow-orange.png"
            />
          </button>
        </div>
        <div className="category-button">
          <button className="category-button">
            Record Label
            <img
              className="down-arrow"
              src="images/icons/down-arrow-orange.png"
            />
          </button>
        </div>
        <div className="category-button">
          <button className="category-button">
            Best Sellers
            <img
              className="down-arrow"
              src="images/icons/down-arrow-orange.png"
            />
          </button>
        </div>
        <div className="category-button">
          <button className="category-button">
            Merch
            <img
              className="down-arrow"
              src="images/icons/down-arrow-orange.png"
            />
          </button>
        </div>
      </div>
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
    </>
  );
}
