import React,{ useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import LinkItem from '../atoms/link-item/link-item.jsx';
import userIcon from "../../images/user.svg";
import wishListIcon from "../../images/wishlist.svg";
import cartIcon from "../../images/cart.svg";
import menuIcon from "../../images/menu.svg";
import SearchFrom from '../atoms/search-form/Search-Form.js';
import Dropdown from '../atoms/dropdown/dropdown.jsx';
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
          <div className={styles.mainHeaderCtn}>
            <div className={styles.headerLeftContent}>
              <p>Free Shipping Over $1000</p>
            </div>
            <div className={styles.headerRightContent}>
              <p>Hotline: some number 12321344332</p>
            </div>
          </div>

          <div className={styles.mainNavItems}>
            <div className={styles.mainNavLogo}>
              <h1><Link>Ecommerce Dev</Link></h1>
            </div>

            <div className={styles.mainNavSearchCtn}>
              <SearchFrom placeHolderText={"Main Search Form"} getSearchFor={getSearchFor}/>
            </div>

            <div className={styles.mainNavUpperLinksCtn}>
              <LinkItem icon={wishListIcon} titleText="Wishlist"/>
              <LinkItem icon={userIcon} titleText="My Account"/>
              <LinkItem icon={cartIcon} titleText="Cart"/>
            </div>
          </div>

          <div className={styles.mainNavMenuCtn}>
            <div className={styles.dropdownCtn}>
            <Dropdown options={dropdownOptions}/>
            </div>
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