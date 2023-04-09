import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./product-card.module.scss";

const ProductCard = ({title, image, description, productId}) => {
  return (
    <div className={styles.productCard} >
      <Link to={`/productDetails/${productId}`}>
        <div className={styles.ctnImg}>
            <img src={image} alt={title}/>
        </div>
        <div className={styles.productInfo}>
            <div className={styles.ctnText}>
                <p className={styles.title}>{title}</p>
                <span className={styles.price}>$89<sup>99</sup></span>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
        </Link>
        <button className={styles.btnBuy}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;