import React, {useState} from "react";
import c from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {clearBooks, updateSearchTerms} from "../../redux/reducers/BookSlice";
import {fetchBooks} from "../../redux/reducers/ActionCreators";
import {SearchParams} from "../../types/types";
export default function SearchBar(){
    const dispatch = useAppDispatch()
    const books = useAppSelector(state => state.bookSlice)
    const [searchValue, setSearchValue]=useState(books.searchTerms)
    const params: SearchParams = {
        searchTerms: books.searchTerms,
        pageNumber:0,
        pageSize:30,
        sortingMethod: books.sortingMethod,
        categories: books.categories
    }
    const handleClick = ()=>{
        if(books.searchTerms !== searchValue){
        dispatch(clearBooks())
        dispatch(updateSearchTerms(searchValue))
        params.searchTerms = searchValue;
        dispatch(fetchBooks(params))}
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter') {
            handleClick()
        }
    }
    return(
        <div className={c.SearchBar} onKeyDown={handleKeyDown}>
            <input
                 type={'text'}
                 onChange={(e)=>setSearchValue(e.target.value)}
                 onKeyDown={handleKeyDown}
                 className={c['search-field']}
                 placeholder={'Start typing...'}
                 value={searchValue}/>
            <div className={c['search-icon-cont']}><SearchIcon onClick={handleClick} style={{fontSize:'2rem', cursor:'pointer'}}/></div>
        </div>
    )
}