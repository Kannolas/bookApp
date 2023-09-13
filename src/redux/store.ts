import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import bookSlice from './reducers/BookSlice'

const rootReducer = combineReducers({
    bookSlice,
})

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootStore = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
