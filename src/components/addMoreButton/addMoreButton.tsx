import {FunctionComponent} from "react";
import styles from '../addMoreButton/addMoreButton.module.css'

interface addMoreButtonProps{
    clickHandler: ()=>void
}

const AddMoreButton:FunctionComponent<addMoreButtonProps>  = ({clickHandler}:addMoreButtonProps)=>{
    return(
        <div className={styles.addMoreButton} onClick={clickHandler}>
            Load More +
        </div>
    )
}

export default AddMoreButton