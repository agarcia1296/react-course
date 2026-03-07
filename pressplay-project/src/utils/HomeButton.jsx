import { NavLink } from "react-router";
import "./HomeButton.css";

export function HomeButton({ size = 36 }) {
  return (
    <NavLink to="/" className="homebutton-link">
      <img
        className="logo"
        src="images/mobile-pressplay-logo.svg"
        style={{ height: size }}
      />
    </NavLink>
  );
}
