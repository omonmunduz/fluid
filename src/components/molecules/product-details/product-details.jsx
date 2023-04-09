import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchProduct from '../../../assets/js/fetchProduct';
import styles from './product-details.module.scss';

const getAllProducts = (state) => {
  const result = [];
  state.map((item) => {
      item.children.map((child) => {
          return (
              result.push(child)
          )
      })
  });
  return result;
}

const ProductDetails = () => {
    const { productId } = useParams();
    const allData = useSelector(state => state.componentList.navigationItems[0]);
    const productsData = allData.componentList.filter(item => item.type === 'productList');
    const allProducts = getAllProducts(productsData);
    let product;
    for (let i = 0; i < allProducts.length; i++) { 
        if (allProducts[i].id == productId) {
            product = allProducts[i];
        }
    }
    console.log(product, 'product')


    /*const results = useQuery(["details", productId], fetchProduct);   

    if (results.isLoading) {
        return <div>Loading...</div>
    }*/

    //const product = results.data.products;
    //console.log(product)

  return (
      <div className={styles.productDetails}>
          <div className={styles.productImageDetails}>
            <div className={styles.ctnMainImg}>
                <img src={product.image} alt={product.productName}/>
            </div>
            <div className={styles.ctnThumbs}>
              <img src={product.image} alt={product.productName}/>
              <img src={product.image} alt={product.productName}/>
              <img src={product.image} alt={product.productName}/>
              <img src={product.image} alt={product.productName}/>
            </div>
          </div>

          <div className={styles.productTextDetails}>
            <div className={styles.productDescription}>
              <h2 className={styles.title}>{product.productName}</h2>
              <p className={styles.description}>{product.description} something something at a great price. Going to put some additional text here just to see how it all looks</p>
              <h4 className={styles.title}>{product.price}$</h4>
            </div>
            <div className={styles.productOptions}>
              <div className={styles.ctnColor}>
                <div className={styles.colorCirlce}></div>
                <div className={styles.colorCirlce}></div>
                <div className={styles.colorCirlce}></div>
                <div className={styles.colorCirlce}></div>
              </div>
              <div className={styles.ctnSize}>
              </div>
            </div>


            <div className={styles.quantityCtn}>
              <form action="">
                <p className={styles.qty}>
                  <button className={styles.qtyminus} aria-hidden="true">&minus;</button>
                  <input type="number" name="qty" id="qty" min="1" max="50" step="1" value="1"/>
                  <button className={styles.qtyplus} aria-hidden="true">&#43;</button>
                </p>
              </form>	
            </div>

            <div className={styles.ctnBtn}>
              <button className={styles.btnBuy}>Buy Now</button>
              <button className={styles.btnAdd}>Add to Cart</button>
            </div>

            <div className={styles.ctnDelivery}>
            </div>

          </div>
      </div>
  )
};



export default ProductDetails;