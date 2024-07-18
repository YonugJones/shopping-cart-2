import { useState, useEffect } from "react";
import Card from "../Card/Card";
import fetchClothing from "../api/api";
import styles from './Shop.module.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productToAdd) => {
    setCartItems([...cartItems, { ...productToAdd }])
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchClothing();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message)
      }
    }

    fetchData();
  }, [])

  useEffect(() => {
    if (selectedCategory === 'ALL') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory.toLowerCase()))
    }
  }, [selectedCategory, products])

  return (
    <div className={styles['shop-container']}>
      <nav className={styles['categories-links']}>
        <ul>
          {['ALL', 'ELECTRONICS', 'JEWELERY', 'MEN\'S CLOTHING', 'WOMEN\'S CLOTHING'].map(category => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategory === category ? styles.selected : ''}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles['display-container']}>
        {error && <p>Error: {error}</p>}
        <div className={styles['products-grid']}>
          {filteredProducts.map(product => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Shop;