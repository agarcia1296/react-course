import { useState, useRef } from "react";
import { NavLink } from "react-router";
import "./Header.css";
import { AccountMenu } from "./AccountMenu";
import { useClickOutside } from "../utils/useClickOutside";

export function Header({ cart }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setOpen(false));

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <>
      {open && <div className="page-dim" onClick={() => setOpen(false)} />}

      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="images/mobile-pressplay-logo.svg" />
            <img
              className="mobile-logo"
              src="images/mobile-pressplay-logo.svg"
            />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="login-link header-link" to="/login">
            <span className="login-text">Login</span>
          </NavLink>

          <div
            className="account-link header-link"
            ref={menuRef}
            onClick={() => setOpen(!open)}
          >
            <button className="account-button">
              <img className="account-icon" src="images/icons/user-icon.svg" />
            </button>
            {open && <AccountMenu />}
          </div>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
