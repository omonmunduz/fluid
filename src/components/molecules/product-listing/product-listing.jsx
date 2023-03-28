import React from 'react'
import ProductCard from '../../atoms/product-card/product-card';
import styles from "./product-listing.module.scss";

const ProductListing = ({items, title}) => {


  return (
    <div className={styles.productListing}>
      <h2>{title} :</h2>
      <div className={styles.resultsCtn}>
        {items.map((item,ind) => {
            return <ProductCard title={item.productName} image={item.image} description={item.description} productId={ind} key={ind} className={styles.productListingItem}/>
        })
      }
      </div>
    </div>
  )
}

export default ProductListing