import {AppDispatch} from "../store";
import {SearchParams, VolumeInfo} from "../../types/types";
import API_KEY from "../../info";
import {BASE_URL} from "../../info";
import {booksFetching, booksFetchingSuccess, booksFetchingError} from "./BookSlice";

export const fetchBooks = ({searchTerms, pageNumber, pageSize, sortingMethod, categories}: SearchParams)=> async(dispatch: AppDispatch)=>{
        console.log('fetching')
        dispatch(booksFetching())
    try {


        fetch(`${BASE_URL}?q=${searchTerms !== '' ? searchTerms : 'search+query'}+${categories !== 'All' ? `subject:${categories}` : ''}&orderBy=${sortingMethod}&startIndex=${pageNumber}&maxResults=${pageSize}&key=${API_KEY}`).then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка ${response.status}`);
            }
            return response.json()
        }).then((data) => {
            console.log(data)
            const totalBooksCount: number = data.totalItems
            if(totalBooksCount===0){
                throw new Error('Books not found')
            }
            const items = data.items.map((item: any):VolumeInfo => {
                return{
                    title:item.volumeInfo.title,
                    publisher: item.volumeInfo.publisher,
                    authors: item.volumeInfo.authors,
                    publishedDate: item.volumeInfo.publishedDate,
                    description: item.volumeInfo.description,
                    pageCount: item.volumeInfo.pageCount,
                    categories: item.volumeInfo.categories,
                    imageLinks: item.volumeInfo.imageLinks || null,
                    language: item.volumeInfo.language,
                    previewLink: item.volumeInfo.previewLink
                }
                }
            )
            const payload = {
                items,
                totalBooksCount
            }
            console.log(payload)
            dispatch(booksFetchingSuccess(payload))
        }).catch((e) => {
            console.log(e)
            dispatch(booksFetchingError(`${e}`))
        })
    }
    catch (e) {
        console.log(e)
        dispatch(booksFetchingError(e))
    }
}