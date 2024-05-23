import React, { useCallback, useState } from "react";
import styles from './mainHeader.module.css';
import Background from "../Background/bg.js";
import Logo from "../../assets/logo.png";

export default function MainHeader({ children }){
    return(
        <div>
            <div>
                <Background />
                <div className={styles.modalContainer}>
                    {children}
                </div> 
                <img
                    src={Logo}
                    className={styles.Logo}
                />
            </div>
        </div>
    )
}