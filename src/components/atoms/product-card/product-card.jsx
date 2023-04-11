import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../features/counter/cart/cartSlice';
import styles from "./product-card.module.scss";

const ProductCard = ({title, image, description, productId, price}) => {
  const dispatch = useDispatch();

  const product = {
    id: productId,
    title: title,
    image: image,
    description: description,
    price: price,
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
                <span className={styles.price}>{price}</span>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
        </Link>
        <button className={styles.btnBuy} onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;