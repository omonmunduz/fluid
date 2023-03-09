import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import propTypes from 'prop-types';
import styles from "./Search-Form.module.scss";

const SearchFrom = ({placeHolderText, getSearchFor}) => {
  const [searchText, setSearchText] = useState('');

  return ( 
    <div className={styles.ctnSearchForm}>
      <form className={styles.searchForm} onSubmit={(e)=> {
        e.preventDefault();
        getSearchFor(searchText)
        }}>
        <input type="text" id="searchText" value={searchText} onChange={(e)=> setSearchText(e.target.value)} className={styles.searchForm} placeholder={placeHolderText} aria-label={`${placeHolderText}`} />
      </form>
    </div>
  )
};

SearchFrom.propTypes = {
  placeHolderText: propTypes.string,
}

export default SearchFrom