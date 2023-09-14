import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {SearchParams, VolumeInfo} from "../types/types";
import {fetchBooks} from "../redux/reducers/ActionCreators";
import SearchForm from "../components/searchForm";
import Booklist from "../components/BookList";
import AddMoreButton from "../components/addMoreButton/addMoreButton";

function Main(){
    const state = useAppSelector(state => state.bookSlice)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        const params: SearchParams = {
            searchTerms: '',
            pageNumber:0,
            pageSize:30,
            sortingMethod: 'relevance',
            categories: 'All'
        }
        const fetchData = async ()=> {
            try {
                await dispatch(fetchBooks(params))
                console.log(state)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [dispatch])

    const handleLoadMore=()=>{
        const params: SearchParams = {
            searchTerms: '',
            pageNumber:state.totalBooks,
            pageSize:30,
            sortingMethod: 'relevance',
            categories: 'All'
        }
        const fetchData = async ()=> {
            try {
                await dispatch(fetchBooks(params))
                console.log(state)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }
    return(
        <div className={'Main'}>
            <SearchForm/>
            <Booklist/>
            <AddMoreButton clickHandler={handleLoadMore}/>
        </div>
    )
}

export default Main