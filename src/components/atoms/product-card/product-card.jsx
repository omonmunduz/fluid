import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../features/counter/cart/cartSlice';
import styles from "./product-card.module.scss";

const ProductCard = ({title, image, description, productId}) => {
  const dispatch = useDispatch();

  const product = {
    id: productId,
    title: title,
    image: image,
    description: description,
  }

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

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
        <button className={styles.btnBuy} onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;