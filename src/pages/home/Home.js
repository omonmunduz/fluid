import React from 'react'
import PromotionsHero from '../../components/organisms/promotionsHero/promotionsHero';
import mainBannerImg from "../../images/main-banner.jpg";
import CategotyListing from "../../components/molecules/category-listing/category-listing";
import CategoryCard from '../../components/atoms/category-card/category-card';
import styles from "./Home.module.scss";
import ProductCard from '../../components/atoms/product-card/product-card';
import ProductListing from "../../components/molecules/product-listing/product-listing";


import cat1 from "../../images/catbanner-01.jpg";
import cat2 from "../../images/catbanner-02.jpg";
import cat3 from "../../images/catbanner-03.jpg";
import cat4 from "../../images/catbanner-04.jpg";


const promoCardItems = [
  {img: cat1, promoType:"Best sale", productTitle:"Laptops Max", description:"From $1699.00 or $64.62/mo."},
  {img: cat2, promoType:"new arrival", productTitle:"Buy Ipad Air", description:"From $1699.00 or $64.62/mo."},
  {img: cat3, promoType:"15% off", productTitle:"Smartwatch 7", description:"From $1699.00 or $64.62/mo."},
  {img: cat4, promoType:"free engraving", productTitle:"Air-Pod Max", description:"From $1699.00 or $64.62/mo."},
  {img: cat1, promoType:"Best sale", productTitle:"Laptops Max", description:"From $1699.00 or $64.62/mo."},
  {img: cat2, promoType:"new arrival", productTitle:"Buy Ipad Air", description:"From $1699.00 or $64.62/mo."},
];

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapperInnerCtn}>
        <PromotionsHero/>
        <ProductListing items={promoCardItems} title="Title"/>
        <CategotyListing/>
      </div>
    </div>
  )
}

export default Home