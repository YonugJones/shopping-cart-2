import { useState } from "react"
import styles from './Card.module.css'

const Card = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    if (value >= 1) {
      setQuantity(parseInt(value));
    }
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    setQuantity(1)
  }

  return (
    <div className={styles['card-container']}>
      <img src={product.image} alt={product.title} className={styles['product-image']} />
      <h3>{product.title}</h3>
      <div className={styles['quantity-control']}>
        <button onClick={handleDecrement}>-</button>
        <input 
          type="number" 
          value={quantity}
          onChange={handleChange}
          min='1'
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
} 
export default Card;