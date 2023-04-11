import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../atoms/cart-item/cart-item';
import styles from './cart.module.scss';

function Cart() {
  const cart = useSelector(state => state.cart);
  let cartItems = <div className={styles.emptyCart}>Your cart is empty</div>

  if (cart.items.length > 0) {
    cartItems = cart.items.map((item) => {
      return <CartItem key={item.id} image={item.image} title={item.title} price={item.price} quantity={item.quantity} description={item.description} id={item.id}/>
    })
  }



  const handleCechkout = () => {
    cart.items.length && (
      console.log(cart, 'cartItems')
      
    )
  }

  console.log(cart, 'cart')
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
      <div className={styles.productInfoCtn}>
            <p>Item</p>
      </div>
        <div className={styles.qtyCtn}>
              <p>Quantity</p>
          </div>
          <div className={styles.shippingCtn}>
              <p>Shipping Method</p>
          </div>
          <div className={styles.priceCtn}>
              <p>Price</p>
          </div>
        </div>
        <div className={styles.cartCtn}>
          {cartItems}
        </div>
        <button className={styles.btnCheckout} onClick={handleCechkout}>Checkout</button>
    </div>
  )
}

export default Cart