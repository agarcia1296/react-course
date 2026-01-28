import { Link } from "react-router";
import "./NavbarMenu.css";
import "../pages/home/HomePage.css";

export function NavbarMenu() {
  return (
    <div className="navbar">
      <div className="category-button">
        <button className="category-button">
          Genre
          <img
            className="down-arrow"
            src="images/icons/down-arrow-orange.png"
          />
        </button>
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
  );
}
