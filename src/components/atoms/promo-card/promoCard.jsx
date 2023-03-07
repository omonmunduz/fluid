import React from 'react'
import propTypes from "prop-types";
import styled from "styled-components";
import styles from "./promoCard.module.scss";
import classNames from 'classnames';

const getCardStyles = (cardSize) => {

    let cardStyles = {
        width: 0,
        height: 0,
        posTop: 0,
        posLeft: 0,
        fontSize:0,
        color:"",
        hoverState:"",
        cursor:"",
    }

    if(cardSize === "small"){
        cardStyles.width = 300;
        cardStyles.posTop = 40;
        cardStyles.posLeft = 30;
        cardStyles.hoverState = "0 0 11px rgba(33,33,33,.2)" ;
        cardStyles.cursor = "pointer";
    }
    if(cardSize === "large") {
        cardStyles.width = 640;
        cardStyles.posTop = 80;
        cardStyles.posLeft = 60;
        cardStyles.hoverState="none";
        cardStyles.cursor = "default";
    }

    return cardStyles;
};


const PromoCard = ({image, promoType, productTitle, description, cardSize, buttonText}) => {
    const promoStyles = getCardStyles(cardSize);
    
    const PromoCardCtn = styled.div`
        width: ${promoStyles.width}px;
        cursor: ${promoStyles.cursor};
        
        &:hover {
            box-shadow: ${promoStyles.hoverState};
        }
        
         > div  {
            left:${promoStyles.posLeft}px;
            top: ${promoStyles.posTop}px;
        }
        
    `;

    const CardImgCtn = styled.img`
        width: ${promoStyles.width}px;
        border-radius: 8px;
    `;

  return (
    <PromoCardCtn className={styles.promoCard}>
        <div className={styled.promoCardImgCtn}>
            <CardImgCtn src={image} alt={`${productTitle} ${description}`} />
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
    </PromoCardCtn>
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