import React from 'react'
import CategoryCard from "../../atoms/category-card/category-card";
import styles from "./category-listing.module.scss";
import cat1 from "../../../images/catbanner-01.jpg";
import cat2 from "../../../images/catbanner-02.jpg";
import cat3 from "../../../images/catbanner-03.jpg";
import cat4 from "../../../images/catbanner-04.jpg";

const promoCardItems = [
    {img: cat1, promoType:"Best sale", productTitle:"Laptops Max", description:"From $1699.00 or $64.62/mo."},
    {img: cat2, promoType:"new arrival", productTitle:"Buy Ipad Air", description:"From $1699.00 or $64.62/mo."},
    {img: cat3, promoType:"15% off", productTitle:"Smartwatch 7", description:"From $1699.00 or $64.62/mo."},
    {img: cat4, promoType:"free engraving", productTitle:"Air-Pod Max", description:"From $1699.00 or $64.62/mo."},
    {img: cat1, promoType:"Best sale", productTitle:"Laptops Max", description:"From $1699.00 or $64.62/mo."},
    {img: cat2, promoType:"new arrival", productTitle:"Buy Ipad Air", description:"From $1699.00 or $64.62/mo."},
];

const CategotyListing = ({name, categoryItems}) => {
  return (
    <div className={styles.categotyListing}>
        <div className={styles.textCtn}>
            <h3>{name}</h3>
        </div>
       <div className={styles.cardsCtn}>
        {promoCardItems.map((item,ind) => {
                return <CategoryCard title={item.productTitle} image={item.img}/>
            })}
        </div>
    </div>
  )
}


export default CategotyListing;