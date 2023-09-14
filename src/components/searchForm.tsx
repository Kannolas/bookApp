import React from "react";
import Dropdown from "./Dropdown/Dropdown";
function SearchForm(){
    const categories:string[] = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const sortingMethods:string[] = ['relevance', 'newest']
    return(
        <div className={'SearchForm'}>
            <div className={'searchForm-container'}>
                <span className={'search-text'}>Categories:</span><Dropdown list={categories}/>
                <span>Categories:</span><Dropdown list={sortingMethods}/>
            </div>
        </div>
    )
}

export default SearchForm