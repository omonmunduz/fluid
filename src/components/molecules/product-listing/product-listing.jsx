import React from 'react'
import ProductCard from '../../atoms/product-card/product-card';
import styles from "./product-listing.module.scss";

const ProductListing = ({items, title}) => {

    let result;
    if(items.length > 0){
        result = items.map((item,ind) => {
            return <ProductCard title={item.productTitle} image={item.img} desription={item.description} productId={ind} key={ind}/>
        });
    }else{
        result = <div className={styles.noResult}>No results found</div>
    }
  return (
    <a>
    <div className={styles.productListing}>
      <h2>{title} :</h2>
      <div className={styles.resultsCtn}>
       {result}
      </div>
    </div>
    </a>
  )
}

export default ProductListing