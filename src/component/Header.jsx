import React from "react";
import styles from "./Header.module.css"
import Logo from "../assets/disney-logo.png"



function Header(){
    click =(props)=>{

    }

    return(
        <>
        <div className={styles.container}>
             <div><a href="#"><img src={Logo} alt="" /></a></div>
            <div className={styles.li} onClick={props.}><a href="#"/>DISNEY+</div>
            <div className={styles.li}><a href="#"/>SHOP</div>
            <div className={styles.li}><a href="#"/>MOVIES</div>
            <div className ={styles.li}><a href="#"/>SHOWS</div>
            <div className={styles.li}><a href="#"/>PARKS</div>
        </div>

        </>
    )
}

export default Header