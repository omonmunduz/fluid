import React from 'react'
import { useSelector } from 'react-redux';
import {convertComponentList} from '../../components/organisms/componentList/componentList';
import styles from "./Home.module.scss";


const Home = () => {
  const homeData = useSelector(state => state.componentList.navigationItems[0]);
console.log(homeData, 'homeData')


const chridren = convertComponentList(homeData.componentList);
console.log(chridren, 'chridren')


  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapperInnerCtn}>
        {chridren}
      </div>
    </div>
  )
}

export default Home