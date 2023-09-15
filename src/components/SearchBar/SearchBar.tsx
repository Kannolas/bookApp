import React, {useState} from "react";
import c from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import {useAppSelector} from "../../hooks/redux";

interface SearchProps{
    onSearch:(value:string)=>void
}
export default function SearchBar({onSearch}:SearchProps){
    const books = useAppSelector(state => state.bookSlice)
    const [searchValue, setSearchValue]=useState(books.searchTerms)
    const handleClick = ()=>{
        onSearch(searchValue);
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