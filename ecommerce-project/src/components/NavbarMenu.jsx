import { Link } from "react-router";
import "./NavbarMenu.css";

export function NavbarMenu() {
  return (
    <div className="navbar">
      <div className="category-button">
        <button className="category-button">Genre</button>
      </div>
      <div className="category-button">
        <button className="category-button">Decade</button>
      </div>
      <div className="category-button">
        <button className="category-button">Record Label</button>
      </div>
      <div className="category-button">
        <button className="category-button">Best Sellers</button>
      </div>
    </div>
  );
}
