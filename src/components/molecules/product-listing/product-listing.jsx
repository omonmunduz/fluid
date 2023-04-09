import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from '../../atoms/product-card/product-card';
import styles from "./product-listing.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const ProductListing = ({items, title}) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const sliderStyle = {
   marginRight: '0 !important',
  };

  return (
    <div className={styles.productListing}>
      <h2>{title}<Link className={styles.seeMore}>See more</Link></h2>
      <div className={styles.resultsCtn}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true} 
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles.mySwiper} ${styles.initialOffset}`}
      >
        {items.map((item,ind) => {
            return <SwiperSlide key={ind} style={sliderStyle}>
                      <ProductCard title={item.productName} image={item.image} description={item.description} productId={item.id} key={ind} className={styles.productListingItem}/>
                    </SwiperSlide>
                })}
      </Swiper>
      </div>
    </div>
  )
}

export default ProductListing