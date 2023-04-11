import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem, removeItem, updateItemQuantity, increment, decrement } from '../../../features/counter/cart/cartSlice';
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
  const dispatch = useDispatch();
  const allData = useSelector(state => state.componentList.navigationItems[0]);
  const productsData = allData.componentList.filter(item => item.type === 'productList');
  const allProducts = getAllProducts(productsData);
  let product;
  const [value, setValue] = useState(1);

  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id == productId) {
      product = allProducts[i];
    }
  }

  const handleIncrement = (e) => {
    e.preventDefault();
    setValue(value + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setValue(value - 1);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      quantity: value
    }
    dispatch(addItem(productToAdd));
  };

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
          <img src={product.image} alt={product.productName} />
        </div>
        <div className={styles.ctnThumbs}>
          <img src={product.image} alt={product.productName} />
          <img src={product.image} alt={product.productName} />
          <img src={product.image} alt={product.productName} />
          <img src={product.image} alt={product.productName} />
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
                  <button className={styles.qtyminus} aria-hidden="true" onClick={(e) => handleDecrement(e)}>&minus;</button>
                  <input type="text" name="qty" id="qty" value={value}  onChange={(e) => handleInputChange(e)} />
                  <button className={styles.qtyplus} aria-hidden="true" onClick={(e) => handleIncrement(e)}>&#43;</button>
                </p>
              </form>	
            </div>

            <div className={styles.ctnBtn}>
              <button className={styles.btnBuy}>Buy Now</button>
              <button className={styles.btnAdd}  onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>

            <div className={styles.ctnDelivery}>
              
            </div>

          </div>
      </div>
  )
};



export default ProductDetails;