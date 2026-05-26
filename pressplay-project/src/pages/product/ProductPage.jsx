import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/Header";
import { NavbarMenu } from "../../components/NavbarMenu";
import "./ProductPage.css";

export function ProductPage({ cart, loadCart }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(`/api/products/new-releases/`)
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === String(productId));
        setProduct(foundProduct);
      });
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <title>PressPlay Marketplace</title>
      <link rel="icon" type="image/svg+xml" href="pressplay-home.svg" />

      <Header cart={cart} />
      <NavbarMenu />

      <div className="product-page">
        <h1>
          {product.albumn} - {product.artist}
        </h1>
        <img src={product.image} />
        <h2>Available Listings</h2>
        {listings.map((listing) => (
          <div key={listing.id}>
            <span>{listing.condition}</span>
            <span>${listing.price}</span>
          </div>
        ))}
      </div>
    </>
  );
}
