import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../components/atoms/product-card/product-card';
import styles from "./products.module.scss";

const getAllProducts = (state) => {
    const result = [];
    state.map((item) => {
        return(
            item.children.map((child) => {
                return (
                    result.push(child)
                )
            })
        )
    });
    return result;
}

function Products() {
    const allData = useSelector(state => state.componentList.navigationItems[0]);
    //console.log(allData, 'allData')
    const productsData = allData.componentList.filter(item => item.type === 'productList');
    //console.log(productsData, 'productsData')
    const allProducts = getAllProducts(productsData);
    console.log(allProducts, 'allProducts')
    
  return (
    <div className={styles.productsWrapper}>
        <div className={styles.productsWrapperInnerCtn}>
            {
                allProducts.map((item, index) => {
                    return(
                        <ProductCard 
                            title={item.productName} 
                            image={item.image} 
                            description={item.description} 
                            productId={item.id}
                            price={item.price}
                            key={index} 
                            className={styles.productItem}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products