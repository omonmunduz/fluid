import React from 'react'
import { BsSearch } from 'react-icons/bs';
import propTypes from 'prop-types';
import styles from "./Search-Form.module.scss";

const SearchFrom = ({placeHolderText}) => {
  return (
    <div className={styles.ctnSearchForm}>
      <input type="text" className={styles.searchForm} placeholder={placeHolderText} aria-label={`${placeHolderText}`}/>
      <button className={styles.searchFormSubmitBtn}><BsSearch/></button>
    </div>
  )
};

SearchFrom.propTypes = {
  placeHolderText: propTypes.string,
}

export default SearchFrom