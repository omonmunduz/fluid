import React from 'react'
import styles from "./product-card.module.scss";
import cat1 from "../../../images/catbanner-01.jpg";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
        <div className={styles.ctnImg}>
            <img src={cat1} alt="product"/>
        </div>
        <div className={styles.productInfo}>
            <div className={styles.ctnText}>
                <p className={styles.title}> Wireless Earbuds, IPX8</p>
                <span className={styles.price}>$89<sup>99</sup></span>
            </div>
            <p className={styles.description}>Organic cotton certified</p>
        </div>
        <button className={styles.btnBuy}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;