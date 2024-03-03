import React from "react";
import styles from "./Modal.module.css";

import closeIcon from "../../images/icons/close.png"

import { useState } from "react";

interface IModalProps {
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: any
}



export default function Modal(props: IModalProps){
    return (
        <>
            {props.isOpen ? 
            <div className={styles.modal}>
                <div className={styles.darkBg} />
                <div className={styles.modalInner}>
                    <div className={styles.modalHeader}>
                        <img src={closeIcon} 
                             alt="close" 
                             className={styles.closeIcon}
                             onClick={props.setIsOpen}/>
                    </div>
                    <div className={styles.modalBody}>
                        { props.children }
                    </div>
                </div>
            </div>: <></>}
        </>
    );
}
