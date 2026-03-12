import { NavLink } from "react-router";
import "./HelpfulLinks.css";

export function HelpfulLinks() {
  return (
    <footer className="helpful-links">
      <div className="links-container">
        {/* Marketplace */}
        <div className="link-column">
          <h3>Marketplace</h3>

          <NavLink to="/shop">Browse Marketplace</NavLink>
          <NavLink to="/new-releases">New Releases</NavLink>
          <NavLink to="/top-sellers">Top Sellers</NavLink>
          <NavLink to="/genres">Genres</NavLink>
          <NavLink to="/vinyl">Vinyl Records</NavLink>
          <NavLink to="/collections">Collections</NavLink>
        </div>

        {/* Buy */}
        <div className="link-column">
          <h3>Buy</h3>

          <NavLink to="/how-to-buy">How to Buy</NavLink>
          <NavLink to="/secure-checkout">Secure Checkout</NavLink>
          <NavLink to="/shipping">Shipping Options</NavLink>
          <NavLink to="/returns">Returns</NavLink>
          <NavLink to="/buyer-protection">Buyer Protection</NavLink>
        </div>

        {/* Sell */}
        <div className="link-column">
          <h3>Sell</h3>

          <NavLink to="/sell">Sell Music</NavLink>
          <NavLink to="/seller-tools">Seller Tools</NavLink>
          <NavLink to="/pricing-guide">Pricing Guide</NavLink>
          <NavLink to="/inventory-tools">Inventory Management</NavLink>
          <NavLink to="/seller-blog">Seller Blog</NavLink>
        </div>

        {/* Help */}
        <div className="link-column">
          <h3>Help & Support</h3>

          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/help">Help Center</NavLink>
          <NavLink to="/shipping-policy">Shipping Policy</NavLink>
          <NavLink to="/returns-policy">Return Policy</NavLink>
          <NavLink to="/security">Security</NavLink>
        </div>

        {/* Company */}
        <div className="link-column">
          <h3>PressPlay</h3>

          <NavLink to="/about">About PressPlay</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/press">Press</NavLink>
          <NavLink to="/partners">Partners</NavLink>
          <NavLink to="/affiliate">Affiliate Program</NavLink>
        </div>
      </div>

      {/* Newsletter */}

      <div className="newsletter">
        <h3>Stay in the Loop</h3>

        <p>Get updates on new releases, marketplace deals, and artist drops.</p>

        <div className="newsletter-form">
          <input type="email" placeholder="Your Email" />

          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}
