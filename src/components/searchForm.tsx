import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import SearchBar from "./SearchBar/SearchBar";
function SearchForm(){
    const categories:string[] = ['All', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const sortingMethods:string[] = ['relevance', 'newest']
    return(
        <div className={'SearchForm'}>
            <div className={'searchForm-container'}>
                <div className={'search-header-text'}>Search for books</div>
                <div className={'search-searchForm'}><SearchBar/></div>
                <div className={'search-dropdowns'}>
                    <span className={'search-text'}>Categories:</span><Dropdown list={categories} dispParam={'categories'}/>
                    <span className={'search-text'}>Sorted By</span><Dropdown list={sortingMethods} dispParam={'orderBy'}/>
                </div>
            </div>
        </div>
    )
}

export default SearchForm