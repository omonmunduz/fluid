import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
        <Header/>
        <div className={styles.layoutInner}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout