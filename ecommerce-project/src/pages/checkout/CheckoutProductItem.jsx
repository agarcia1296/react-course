import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import { ProductQuantityContainer } from "../../components/ProductQuantityContainer";

export function CheckoutProductItem({ cartItem, deliveryOptions, loadCart }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const selectedDeliveryOption = deliveryOptions.find(
    (option) => option.id === cartItem.deliveryOptionId
  );

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateCart = async () => {
    await axios.post(`/api/cart-items/${cartItem.productId}`, {
      productId: cartItem.productId,
      quantity,
    });
    await loadCart();
  };

  return (
    <section className="product-item">
      <header className="product-header">
        <span className="package-pill">Direct Package (1 of 1)</span>
      </header>

      <div className="product-body">
        <div className="product-left">
          <img
            className="product-image"
            src={cartItem.product.image}
            alt={cartItem.product.name}
          />

          <div className="product-details">
            <h3 className="product-title">{cartItem.product.name}</h3>

            <p className="product-subtitle">{cartItem.product.subtitle}</p>

            <span className="product-condition">Near Mint</span>

            <div className="product-actions">
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                onBlur={updateCart}
              >
                {[1, 2, 3, 4].map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>

              <span className="quantity-label">
                of {cartItem.product.stock}
              </span>

              <button className="link-button" onClick={deleteCartItem}>
                Remove
              </button>

              <button className="link-button">Save for later</button>
            </div>
          </div>
        </div>

        <div className="product-right">
          <div className="price">
            {formatMoney(cartItem.product.priceCents)}
          </div>
        </div>
      </div>

      <aside className="package-summary">
        <div className="delivery-date">
          Delivery date:{" "}
          {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
            "dddd, MMMM D"
          )}
        </div>

        <DeliveryOptions
          cartItem={cartItem}
          deliveryOptions={deliveryOptions}
          loadCart={loadCart}
        />
      </aside>
    </section>
  );
}
