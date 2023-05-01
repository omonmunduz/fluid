import React from 'react'
import classNames from 'classnames';
import styles from "./image-text.module.scss";


const getImageTextPosition = (textPos, title, subtitle, text, image) => {
    
};

export const ImageText = ({textPos, title, subtitle, text, image}) => { 


  const textPosition = classNames(styles.container,{
    [styles.textLeft]: textPos === 'left',
    [styles.textRight]: textPos === 'right',
    [styles.textTop]: textPos === 'top',
  })

  return (
    <div className={styles.imageTextCtn}>
      <div className={textPosition}>
        <div className={styles.textCtn}>
          <h2 className={styles.title}>{title}</h2>
          <h5 className={styles.subtitle}>{subtitle}</h5>
          <p className={styles.text}>{text}</p>
        </div>

        <div className={styles.imageCtn}>
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default ImageText;