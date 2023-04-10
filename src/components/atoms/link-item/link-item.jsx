import { Link } from 'react-router-dom';
import React from 'react'
import propTypes from "prop-types";
import styles from "./link-item.module.scss";

const LinkItem = ({icon, titleText, linkUrl}) => {
  return (
    <div className={styles.ctnItem}>
        <Link to="cart">
            <img src={icon} alt={titleText} className={styles.linkItemIcon}/>
            {titleText && (
                 <p className={styles.linkItemText}>{titleText}</p>
            )}
        </Link>
    </div>
  )
}

LinkItem.propTypes = {
    titleText: propTypes.string,
    linkUrl: propTypes.string,
}

export default LinkItem