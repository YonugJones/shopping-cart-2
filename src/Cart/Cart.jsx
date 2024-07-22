import styles from './Cart.module.css';
import { useEffect } from 'react';

const Cart = ({ cartItems, onClose, removeFromCart, updateQuantity }) => {
  useEffect(() => {
    console.log('Cart component rendered with items:', cartItems);
  }, [cartItems]);

  return (
    <div className={styles['cart-container']}>
      <div className={styles['cart-content']}>
        <button className={styles['close-button']} onClick={onClose}>CLOSE</button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your Cart Is Empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
