import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, updateItemQuantity, increment, decrement} from '../../../features/counter/cart/cartSlice';
import styles from "./cart-item.module.scss";

function CartItem({image, title, price, quantity, description, id}) {
    const dispatch = useDispatch();
    const [value, setValue] = useState(quantity);

    const handleIncrement = (event) => {
        event.preventDefault();
        dispatch(increment({id}));
    };
    
    const handleDecrement = (event) => {
        event.preventDefault();
        dispatch(decrement({id}));
    };
    
   const handleInputChange = (event) => {
  const newValue = event.target.value;
  setValue(newValue);

  if (newValue === "") {
    dispatch(updateItemQuantity({ id, quantity: 0 }));
  } else {
    dispatch(updateItemQuantity({ id, quantity: parseInt(newValue) }));
  }
};

    return (
        <div className={styles.cartItem}>
            <div className={styles.productCtn}>
                <div className={styles.imgCtn}>
                    <img src={image} alt={title}/>
                </div>
                <div className={styles.infoCtn}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description} descrioptoin alas lorem ipsum</p>
                </div>
            </div>
            <div className={styles.qtyCtn}>
                <div className={styles.quantityCtn}>
                    <form action="">
                        <p className={styles.qty}>
                        <button className={styles.qtyminus} aria-hidden="true" onClick={(e) => handleDecrement(e)}>&minus;</button>
                        <input type="text" name="qty" id="qty" value={quantity}  onChange={(e) => handleInputChange(e)} />
                        <button className={styles.qtyplus} aria-hidden="true" onClick={(e) => handleIncrement(e)}>&#43;</button>
                        </p>
                    </form>	
                </div>
            </div>
            <div className={styles.shippingCtn}>
                <p className={styles.shipping}>Shipping: Free</p>
            </div>
            <div className={styles.priceCtn}>
                <p className={styles.price}>${price}</p>
            </div>
        </div>
    )
}

export default CartItem;
