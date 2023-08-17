import React from 'react'
import propTypes from "prop-types";
import styled from "styled-components";
import styles from "./promo-Card.module.scss";
import classNames from 'classnames';

const ImgCtn = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 8px;

    @media (max-width: 633px) {
        width: 100%;
    }
`;



const PromoCard = ({image, promoType, productTitle, description, cardSize, buttonText}) => {


  return (
    <div className={styles.promoCard}>
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


PromoCard.propTypes = {
    image: propTypes.string,
    promoType: propTypes.string,
    productTitle: propTypes.string,
    description: propTypes.string,
    cardSize: propTypes.string,
    buttonText: propTypes.string,
}

export default PromoCard