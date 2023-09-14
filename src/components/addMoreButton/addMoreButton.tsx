import React from "react";
import styles from '../addMoreButton/addMoreButton.module.css'

export default function AddMoreButton({clickHandler}:{clickHandler: ()=> void}){
    return(
        <div className={styles.addMoreButton} onClick={clickHandler}>
            Load More +
        </div>
    )
}