import styles from "./carousel-slider.module.scss";
import React, { useRef, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation } from "swiper";

import "swiper/css";

const CarouselSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className={styles.sliderc}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true} 
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
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
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles.mySwiper} ${styles.initialOffset}`}
      >
        <SwiperSlide className={styles.items}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.items}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.items}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.items}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
