import React from "react";
import c from './SearchForm.module.css'
import Dropdown from "../Dropdown/Dropdown";
import SearchBar from "../SearchBar/SearchBar";
function SearchForm(){
    const categories:string[] = ['All', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const sortingMethods:string[] = ['relevance', 'newest']
    return(
        <div className={c.SearchForm}>
            <div className={c['searchForm-container']}>
                <div className={c['search-header-text']}>Search for books</div>
                <div className={c['search-searchForm']}><SearchBar/></div>
                <div className={c['search-dropdowns']}>
                    <span className={c['search-text']}>Categories:</span><Dropdown list={categories} dispParam={'categories'}/>
                    <span className={c['search-text']}>Sorted By</span><Dropdown list={sortingMethods} dispParam={'orderBy'}/>
                </div>
            </div>
        </div>
    )
}

export default SearchForm