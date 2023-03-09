import React from 'react'
import styles from "./product-card.module.scss";

const ProductCard = ({title, image, description}) => {
  return (
    <div className={styles.productCard}>
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
        <button className={styles.btnBuy}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;