import React from 'react'
import styles from "./Inner-Layout.module.scss";

const InnerLayout = ({chidlren}) => {
  return (
    <div className={styles.innerLayout}>
        {chidlren}
    </div>
  )
}

export default InnerLayout