import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {SearchParams} from "../types/types";
import {fetchBooks} from "../redux/reducers/ActionCreators";
import SearchForm from "../components/searchForm";
import Booklist from "../components/BookList";
import {useSelector} from "react-redux";

function Main(){
    const state = useAppSelector(state => state.bookSlice)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        const params: SearchParams = {
            searchTerms: '',
            pageNumber:0,
            pageSize:20,
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
    return(
        <div className={'Main'}>
            <SearchForm/>
            <Booklist/>
        </div>
    )
}

export default Main