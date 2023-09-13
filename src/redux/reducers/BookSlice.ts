import {VolumeInfo} from "../../types/types";
import {createSlice} from "@reduxjs/toolkit";
import {BookState} from "../../types/types";


const initialState: BookState = {
    books: [],
    isLoading:true,
    error: '',
    totalBooks: 0,
    totalBooksCount: 0
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        booksFetching(state){
            state.isLoading = true
        },
        booksFetchingSuccess(state, action:{payload: any}){
            state.isLoading = false
            state.error = ''
            state.books= state.books.concat(action.payload.items)
            state.totalBooks = action.payload.items.length
            state.totalBooksCount = action.payload.totalBooksCount
        },
        booksFetchingError(state, action){
            state.isLoading = true;
            state.error = action.payload
        }
    }
})

export default bookSlice.reducer

export const {booksFetching, booksFetchingSuccess, booksFetchingError} = bookSlice.actions