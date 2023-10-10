import {useState, FunctionComponent} from "react";
import c from './Dropdown.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface DropdownProps {
    list: string[];
    select: string;
    onCategoryChange: (newCategory: string) => void;
}

const Dropdown:FunctionComponent<DropdownProps> = ({list, select, onCategoryChange}:DropdownProps)=>{
    const [isActive, setIsActive]=useState(false)
    const handleSelect = (item:string)=>{
        onCategoryChange(item)
        setIsActive(false)
    }
    return(
        <div className={c.dropdown}>
            <div className={c['dropdown-default']} key={select} onClick={(e)=>setIsActive((!isActive))}><>{select}</><KeyboardArrowDownIcon/></div>
            {isActive?<div className={c['dropdown-content']}>
                {list.map((item)=>{
                    return(<div className={c['dropdown-elem']} onClick={()=>handleSelect(item)} key={item}>{item}</div>)
                })}
            </div>:''}
        </div>
    )
}
export default Dropdown;