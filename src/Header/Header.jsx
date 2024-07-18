import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-title']}>The Outlet</div>
      <div className={styles['header-links']}>
        <Link to='/'>HOME</Link>
        <Link to='shop'>SHOP</Link>
      </div>
      <div className={styles['header-checkout']}>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  )
}
export default Header;