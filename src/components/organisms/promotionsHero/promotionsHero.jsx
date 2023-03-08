import React from 'react';
import Carousel from "../../atoms/carousel/carousel.jsx";
import PromoCard from '../../atoms/promo-card/promoCard';
import cat1 from "../../../images/catbanner-01.jpg";
import cat2 from "../../../images/catbanner-02.jpg";
import cat3 from "../../../images/catbanner-03.jpg";
import cat4 from "../../../images/catbanner-04.jpg";
import propTypes from "prop-types";
import styles from "./promotionsHero.module.scss";
import LargePromoCard from '../../atoms/large-promo-card/large-promo-card.jsx';


const promoCardItems = [
    {img: cat1, promoType:"Best sale", productTitle:"Laptops Max", description:"From $1699.00 or $64.62/mo."},
    {img: cat2, promoType:"new arrival", productTitle:"Buy Ipad Air", description:"From $1699.00 or $64.62/mo."},
    {img: cat3, promoType:"15% off", productTitle:"Smartwatch 7", description:"From $1699.00 or $64.62/mo."},
    {img: cat4, promoType:"free engraving", productTitle:"Air-Pod Max", description:"From $1699.00 or $64.62/mo."},
];

const PromotionsHero = () => {

    // create an an array with 10 obejcts inside. Filled with image, title, description, and promo type properties  
    const carouselItems = Array(10).fill({img: cat1, title:"Laptops Max", description:"From $1699.00 or $64.62/mo.", promoType:"Best sale"});

  return (
    <div className={styles.promotionsHero}>
        <LargePromoCard image={promoCardItems[2].img} promoType={promoCardItems[2].promoType}  productTitle={promoCardItems[2].productTitle} description={promoCardItems[2].description} cardSize="large" buttonText="Buy Now    " />
        <div className={styles.heroPromoCardsCtn}>
            {promoCardItems.map(card => {
                return (
                    <PromoCard image={card.img} promoType={card.promoType}  productTitle={card.productTitle} description={card.description} cardSize="small"/>
                )
            })}
        </div>
    </div>
  )
}

export default PromotionsHero