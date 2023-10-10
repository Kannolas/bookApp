import {useEffect, FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {SearchParams, VolumeInfo} from "../types/types";
import {fetchBooks} from "../redux/reducers/ActionCreators";
import SearchForm from "../components/searchForm/SearchForm";
import Booklist from "../components/BookList";
import AddMoreButton from "../components/addMoreButton/addMoreButton";
import {booksFetchingError, clearBooks} from "../redux/reducers/BookSlice";

const Main:FunctionComponent = ()=>{
    const state = useAppSelector(state => state.bookSlice)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        const params: SearchParams = {
            searchTerms: state.searchTerms,
            pageNumber:0,
            pageSize:30,
            sortingMethod: state.sortingMethod,
            categories: state.categories
        }
        const fetchData = async ()=> {
            try {
                await dispatch(fetchBooks(params))
            } catch (e) {
                dispatch(booksFetchingError(e))
            }
        }
        if(state.totalBooks===0){
        fetchData();}
    }, [dispatch])

    const handleLoadMore=()=>{
        const params: SearchParams = {
            searchTerms: '',
            pageNumber:state.totalBooks,
            pageSize:30,
            sortingMethod: 'relevance',
            categories: state.categories
        }
        const fetchData = async ()=> {
            try {
                await dispatch(fetchBooks(params))
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