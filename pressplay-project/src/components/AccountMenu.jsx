import { NavLink } from "react-router";
import "./AccountMenu.css";

export function AccountMenu({ onClose }) {
  return (
    <div className="account-menu">
      {/* Content */}
      <div className="account-content">
        {/* LEFT COLUMN */}
        <div className="account-column">
          <h2>Your Account</h2>

          <ul>
            <li>
              <NavLink to="/login">Account</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/">Messages</NavLink>
            </li>
            <li>
              <NavLink to="/">Your Collection</NavLink>
            </li>
            <li>
              <NavLink to="/">Manage Payment Methods</NavLink>
            </li>
            <li>
              <NavLink to="/">Manage Addresses</NavLink>
            </li>
            <li>
              <NavLink to="/">Email Preferences</NavLink>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="account-divider" />

        {/* RIGHT COLUMN */}
        <div className="account-column">
          <h2>Sell</h2>
          <ul>
            <li>
              <NavLink to="/">Account</NavLink>
            </li>
            <li>
              <NavLink to="/">Seller Portal</NavLink>
            </li>
            <li>
              <NavLink to="/">Marketplace Seller Resources</NavLink>
            </li>
            <li>
              <NavLink to="/">Pro Seller Resources</NavLink>
            </li>
          </ul>

          <h2>Help</h2>
          <ul>
            <li>
              <NavLink to="/">Contact Customer Support</NavLink>
            </li>
            <li>
              <NavLink to="/">Help Center</NavLink>
            </li>
            <li>
              <NavLink to="/">Refund and Return Policy</NavLink>
            </li>
            <li>
              <NavLink to="/">PressPlay Safeguards</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
