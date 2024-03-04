import React from 'react'
import styles from "./SideBar.module.css"
import SideBaritem from './SideBaritem'
const SideBar = () => {

  const MENU_ITEM =[
    "Users","Products","Carts"
  ]
  return (
 < div className={styles["side-bar"]}>
    <aside>
      <nav>
    <ul className={styles["ul-aside"]}>
    {/* <li className={styles["li-aside"]}><a class="active" href="#home">Users</a></li>
    <li className={styles["li-aside"]}><a href="#news">Products</a></li>
    <li className={styles["li-aside"]}><a href="#contact">Carts</a></li> */}
    <SideBaritem title={MENU_ITEM[0]} path="/user-list"/>
    <SideBaritem title={MENU_ITEM[1]} path="/product-list"/>
    <SideBaritem title={MENU_ITEM[2]} path="/cart-list"/>
    </ul>
    </nav>
    </aside>
    
</div>
  )
}

export default SideBar