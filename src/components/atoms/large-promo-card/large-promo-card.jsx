import React from 'react'
import styled from 'styled-components';
import styles from "./large-promo-card.module.scss";

const ImgCtn = styled.img`
    width: 600px;
    height: 420px;
    border-radius: 8px;

    @media (max-width: 633px) {
        width: 100%;
    }
`;

const LargePromoCard = ({image, promoType, productTitle, description, cardSize, buttonText}) => {
    return (
        <div className={styles.largePromoCard}>
            <div className={styled.promoCardImgCtn}>
                <ImgCtn src={image} alt={`${productTitle} ${description} `} />
            </div>
            <div className={styles.promoCardContent}>
                <p className={styles.promoType}>
                    {promoType}
                </p>
                <h3 className={styles.productTitle}>{productTitle}</h3>
                <p className={styles.description}>{description}</p>
                {buttonText && (
                    <a href="#" className={styles.buyNowBtn}>{buttonText}</a>
                )}
            </div>
        </div>
      )
}

export default LargePromoCard