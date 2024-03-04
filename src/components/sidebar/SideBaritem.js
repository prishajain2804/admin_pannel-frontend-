import React, { useState } from "react";
import styles from "./SideBar.module.css"
import { Link } from "react-router-dom";


const SideBaritem = (props) => {

    const [isOpen,setIsOpen] = useState(false);
    const [height,setHeight] = useState('35px')

    const expandItem =()=>{
        setHeight("150px")
    };

    const collapseItem =()=>{
        setHeight("35px")
    };
  
  
  
    return (
    <>
      <li className={ `${styles['li-aside']} ${styles.item}`} style={{
        height:height,
        backgroundColor:"purple"
      }}
      
      onClick={()=>{
        if(isOpen){
            collapseItem();
        }else{
            expandItem();

        }
        setIsOpen(!isOpen)
      }}>
        <Link to={props.path}>{props.title}</Link>
        {/* <a class="active" href="#home">
          {props.title}
        </a> */}
      </li>
    </>
  );
};

export default SideBaritem;
