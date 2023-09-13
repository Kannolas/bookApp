import {AppDispatch} from "../store";
import axios from "axios";
import {VolumeInfo, SearchParams} from "../../types/types";
import API_KEY from "../../info";
import {BASE_URL} from "../../info";
import {booksFetching, booksFetchingSuccess, booksFetchingError} from "./BookSlice";


export const fetchBooks = ({searchTerms, pageNumber, pageSize, sortingMethod, categories}: SearchParams)=> async(dispatch: AppDispatch)=>{
        console.log('fetching')
        dispatch(booksFetching)
        // const response = await axios.get<VolumeInfo>(`${BASE_URL}`
        //     , {
        //     params: {
        //         q: encodedSearchTerms,
        //         orderBy: sortingMethod,
        //         maxResults: pageSize,
        //         key: API_KEY,
        //     },
        // }
        // );
    try {


        fetch(`${BASE_URL}?q=${searchTerms !== '' ? searchTerms : 'search+query'}+${categories !== 'All' ? `subject:${categories}` : ''}&orderBy=${sortingMethod}&startIndex=${pageNumber}&maxResults=${pageSize}&key=${API_KEY}`).then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка ${response.status}`);
            }
            return response.json()
        }).then((data) => {
            const totalBooksCount: number = data.totalItems
            const items = data.items.map((item: any) => item.volumeInfo
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