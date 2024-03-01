import React from 'react'
import styles from "./SideBar.module.css"
import SideBaritem from './SideBaritem'
const SideBar = () => {
  return (
 < div className={styles["side-bar"]}>
    <aside>
    <ul className={styles["ul-aside"]}>
    <li className={styles["li-aside"]}><a class="active" href="#home">Users</a></li>
    <li className={styles["li-aside"]}><a href="#news">Products</a></li>
    <li className={styles["li-aside"]}><a href="#contact">Carts</a></li>
    <SideBaritem/>
    </ul>
    </aside>
    
</div>
  )
}

export default SideBar