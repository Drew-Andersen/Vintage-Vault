import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './UserItems.css';

const UserItems = () => {
  // samples items in the cart (if needed you can replace this with data from an API or state management solution)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Vintage Comic Book', price: 20.99, quantity: 1 },
    { id: 2, name: 'Classic Watch', price: 99.99, quantity: 1 },
  ]);

  // removes an item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // changes item quantity
  const changeQuantity = (id, increment) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id
          ? { ...item, quantity: item.quantity + increment }
          : item
      )
    );
  };

  return (
    <div className="user-items-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => changeQuantity(item.id, 1)}>+</button>
              <button onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
              <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <Button>Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default UserItems;
