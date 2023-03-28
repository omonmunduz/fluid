import React from 'react';
import ProductListing from '../../molecules/product-listing/product-listing';
import styles from './productList.module.scss';



const ProductList = ({type, subType, children}) => {
    let title = subType === 'popularItems' ? 'Popular Products' : 'New Products';
    return(
        <div className={styles.productList}>
            <ProductListing items={children} title={title}/>
        </div>
    )
};

export default ProductList;