import React from "react";
import {useState} from "react";
import c from './Dropdown.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface DropdownProps {
    list: string[];
}
export default function Dropdown({list}:DropdownProps){
    const [isActive, setIsActive]=useState(false)
    return(
        <div className={c.dropdown}>
            <div className={c['dropdown-default']} onClick={(e)=>setIsActive((!isActive))}><>{list[0]}</><KeyboardArrowDownIcon/></div>
            {isActive?<div className={c['dropdown-content']}>
                {list.map((item)=>{
                    return(<div className={c['dropdown-elem']}>{item}</div>)
                })}
            </div>:''}
        </div>
    )
}