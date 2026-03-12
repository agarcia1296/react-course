import { NavLink } from "react-router";
import "./ProductCard.css";

export function ProductCard({ product }) {
  return (
    <NavLink to={`/products/${product.id}`} className="product-card">
      <img src={product.image} />
      <h4>{product.name}</h4>
    </NavLink>
  );
}
