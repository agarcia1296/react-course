import "ProductPage.css";

export function ListingCard({ listing }) {
  return (
    <div className="listing-card">
      <div className="seller">
        <h4>{listing.seller}</h4>
        <p>
          {listing.rating}% ({listing.sales} sales)
        </p>
      </div>

      <div className="condition">{listing.condition}</div>

      <div className="price">${listing.price}</div>

      <div className="buy">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
