import { NavLink } from "react-router";
import "./NewsWidget.css";

export function NewsWidget({ image, title, description, link }) {
  return (
    <div className="news-widget">
      <img src={image} className="news-image" />

      <div className="news-overlay">
        <h3>{title}</h3>
        <p>{description}</p>

        <NavLink to={link} className="news-button">
          Read More
        </NavLink>
      </div>
    </div>
  );
}
