import {VolumeInfo} from "../../types/types";
import {createSlice} from "@reduxjs/toolkit";
import {BookState} from "../../types/types";
import removeDuplicatesById from "../../funcs/removeDuplicatesById";


const initialState: BookState = {
    books: [],
    isLoading:true,
    error: '',
    totalBooks: 0,
    totalBooksCount: 0,
    searchTerms: '',
    categories: 'All',
    sortingMethod: 'relevance',
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        clearBooks(state){
          state.books = [];
          state.isLoading = true;
          state.error = '';
          state.totalBooks=0;
        },

        booksFetching(state){
            state.isLoading = true
        },
        booksFetchingSuccess(state, action:{payload: any}){
            state.isLoading = false
            state.error = ''
            state.books= removeDuplicatesById([...state.books, ...action.payload.items])
            state.totalBooks = state.books.length
            state.totalBooksCount =  action.payload.totalBooksCount
        },
        booksFetchingError(state, action){
            state.isLoading = true;
            state.error = action.payload
        },

        sortBooksByDate(state) {
            state.books.sort((a:VolumeInfo, b:VolumeInfo) => {
                const dateA:Date = new Date(a.publishedDate);
                const dateB:Date = new Date(b.publishedDate);
                if(dateA<dateB){
                    return 1;
                }
                if (dateA>dateB){
                    return -1
                }
                return 0
            });
        },

        sortBooksByTitle(state) {
            state.books.sort((a, b) => {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            });
        },
        updateCategories(state, action: { payload: string}) {
            state.categories = action.payload;
        },
        // Добавляем редюсер для обновления метода сортировки
        updateSortingMethod(state, action: { payload: string }) {
            state.sortingMethod = action.payload;
        },
        updateSearchTerms(state, action: {payload: string}){
            state.searchTerms = action.payload
        }
    }
})

export default bookSlice.reducer

export const { clearBooks, booksFetching, booksFetchingSuccess, booksFetchingError, updateSortingMethod, updateCategories, updateSearchTerms, sortBooksByTitle, sortBooksByDate} = bookSlice.actions