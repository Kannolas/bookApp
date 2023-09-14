import React, {useRef} from "react";
import {useState, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import c from './Dropdown.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    clearBooks,
    sortBooksByDate,
    sortBooksByTitle,
    updateCategories,
    updateSortingMethod
} from "../../redux/reducers/BookSlice";
import {fetchBooks} from "../../redux/reducers/ActionCreators";
import {SearchParams} from "../../types/types";
interface DropdownProps {
    list: string[];
    dispParam:string;
}
export default function Dropdown({list, dispParam}:DropdownProps){
    const dispatch = useAppDispatch()
    const books = useAppSelector(state => state.bookSlice)
    const [isActive, setIsActive]=useState(false)
    const params: SearchParams = {
        searchTerms: books.searchTerms,
        pageNumber:0,
        pageSize:30,
        sortingMethod: books.sortingMethod,
        categories: books.categories
    }


    const handleSelect = (item:string)=>{

        if(dispParam==='categories' && books.categories!==item){
            dispatch(clearBooks())
            dispatch(updateCategories(item));
            params.categories = item
            dispatch(fetchBooks(params))
        }
        if(dispParam==='orderBy' && books.sortingMethod!==item){
            dispatch(updateSortingMethod(item))
            if(books.sortingMethod!=='newest'){
                dispatch(sortBooksByDate())
            }
            else{
                dispatch(sortBooksByTitle())
            }
        }
        setIsActive(false)
    }
    const selected = dispParam==='categories'?books.categories:books.sortingMethod;
    return(
        <div className={c.dropdown}>
            <div className={c['dropdown-default']} onClick={(e)=>setIsActive((!isActive))}><>{selected}</><KeyboardArrowDownIcon/></div>
            {isActive?<div className={c['dropdown-content']}>
                {list.map((item)=>{
                    return(<div className={c['dropdown-elem']} onClick={()=>handleSelect(item)}>{item}</div>)
                })}
            </div>:''}
        </div>
    )
}