import React from 'react'
import styles from "./category-card.module.scss";

const CategoryCard = ({title, image}) => {
  return (
    <div className={styles.categoryCard}>
        <div className={styles.imgCtn}>
            <img src={image} alt={title}/>
        </div>
        <div className={styles.textCtn}>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default CategoryCard;