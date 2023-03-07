import React from 'react'
import PromotionsHero from '../../components/organisms/promotionsHero/promotionsHero';
import mainBannerImg from "../../images/main-banner.jpg";
import CategotyListing from "../../components/molecules/category-listing/category-listing";
import CategoryCard from '../../components/atoms/category-card/category-card';
import styles from "./Home.module.scss";
import ProductCard from '../../components/atoms/product-card/product-card';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapperInnerCtn}>
        <PromotionsHero/>
        <CategotyListing/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Home