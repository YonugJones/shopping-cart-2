import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productToAdd) => {
    const existingItem = cartItems.find(item => item.id === productToAdd.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + productToAdd.quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, productToAdd]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(quantity, 1) }
        : item
    ));
  };

  console.log('Cart Items:', cartItems);

  return (
    <div>
      <Header
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        addToCart={addToCart}
      />
      <Outlet context={{ addToCart }} />
    </div>
  );
};

export default App;
