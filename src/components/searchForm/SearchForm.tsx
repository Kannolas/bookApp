import React from "react";
import c from './SearchForm.module.css'
import Dropdown from "../Dropdown/Dropdown";
import SearchBar from "../SearchBar/SearchBar";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {SearchParams} from "../../types/types";
import {
    clearBooks,
    updateCategories,
    sortBooksByTitle,
    sortBooksByDate,
    updateSortingMethod,
    updateSearchTerms
} from "../../redux/reducers/BookSlice";
import {fetchBooks} from "../../redux/reducers/ActionCreators";
function SearchForm(){
    const books = useAppSelector(state => state.bookSlice)
    const dispatch = useAppDispatch()
    const categories:string[] = ['All', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const sortingMethods:string[] = ['relevance', 'newest']
    const params: SearchParams = {
        searchTerms: books.searchTerms,
        pageNumber:0,
        pageSize:30,
        sortingMethod: books.sortingMethod,
        categories: books.categories
    }

    const handleSearch = (value:string)=>{
        if(books.searchTerms !== value){
            dispatch(clearBooks())
            dispatch(updateSearchTerms(value))
            params.searchTerms = value;
            dispatch(fetchBooks(params))}
    }
    const handleCategoriesChange = (item:string)=>{
        if(books.categories!==item) {
            dispatch(clearBooks())
            dispatch(updateCategories(item));
            params.categories = item
            dispatch(fetchBooks(params))
        }
    }

    const handleSortChange = (item:string)=>{
        if(books.sortingMethod !== item) {
            dispatch(updateSortingMethod(item))
            params.sortingMethod = item
            if (books.sortingMethod !== 'newest') {
                dispatch(sortBooksByDate())
            } else {
                dispatch(sortBooksByTitle())
            }
        }
    }
    return(
        <div className={c.SearchForm}>
            <div className={c['searchForm-container']}>
                <div className={c['search-header-text']}>Search for books</div>
                <div className={c['search-searchForm']}><SearchBar onSearch={handleSearch} /></div>
                <div className={c['search-dropdowns']}>
                    <span className={c['search-text']}>Categories:</span><Dropdown list={categories} select={books.categories} onCategoryChange={handleCategoriesChange}/>
                    <span className={c['search-text']}>Sorted By</span><Dropdown list={sortingMethods} select={books.sortingMethod} onCategoryChange={handleSortChange}/>
                </div>
            </div>
        </div>
    )
}

export default SearchForm