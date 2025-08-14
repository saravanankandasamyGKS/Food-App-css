import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-content">
        <button className="clear-button" onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h2 className="empty-message">
            Cart is empty. Add items to the cart!
          </h2>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
