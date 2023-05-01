import React,{ useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import LinkItem from '../atoms/link-item/link-item.jsx';
import userIcon from "../../assets/js/images/user.png";
import cartIcon from "../../assets/js/images/shopping-cart.png";
import SearchFrom from '../atoms/search-form/Search-Form.js';
import styles from './header.module.scss'

const dropdownOptions = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

const Header = () => {
const [searchFor, setSearchFor] = useState('');


const getSearchFor = (product) => {
    setSearchFor(product);
}


  return (
      <header className={styles.mainHeader}>
        <div className={styles.headerInnerCtn}>
          <div className={styles.mainNavItems}>
            <div className={styles.mainNavSearchCtn}>
              <SearchFrom placeHolderText={"Main Search Form"} getSearchFor={getSearchFor}/>
            </div>

            <div className={styles.mainNavUpperLinksCtn}>
              <LinkItem icon={userIcon}/>
              <LinkItem icon={cartIcon}/>
            </div>
          </div>

          <div className={styles.mainNavMenuCtn}>
          <h1 className={styles.companyName}><Link to="/">Ecommerce Dev</Link></h1>
            <div className={styles.menuLinks}>
                <NavLink to="/" className={styles.menuItem}>Home</NavLink>
                <NavLink to="/products" className={styles.menuItem}>Products</NavLink>
                <NavLink to="/contact" className={styles.menuItem}>Contact</NavLink>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header