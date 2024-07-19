import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import { useState } from 'react';
import Cart from '../Cart/Cart';


const Header = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    console.log('cart got clicked!')
  }

  return (
    <div className={styles['header-container']}>
      <div className={styles['header-title']}>The Outlet</div>
      <div className={styles['header-links']}>
        <Link to='/'>HOME</Link>
        <Link to='shop'>SHOP</Link>
      </div>
      <div className={styles['header-checkout']} onClick={toggleCart}>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      {isCartOpen && (
        <Cart 
          cartItems={cartItems}
          onClose={toggleCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  )
}
export default Header;