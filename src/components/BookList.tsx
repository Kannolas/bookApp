import React from "react";
import {useAppSelector} from "../hooks/redux";
import {VolumeInfo} from "../types/types";
import Book from "./Book";
import {booksFetchingError} from "../redux/reducers/BookSlice";
import LoadingSpinner from "./spinner/LoadingSpinner";
function Booklist(){
    const {books, isLoading, error, totalBooks, totalBooksCount} = useAppSelector(state => state.bookSlice)
    return(<>
    {error!==''?<div className={'error-message'}>{error}</div>:isLoading?<div className={'loading'}><LoadingSpinner/></div>:
            <div className={'Booklist'}>
                <div className={'Booklist-cont'}>
                    {books.map((book: VolumeInfo)=>{
                        return <Book title={book.title} authors={book.authors} categories={book.categories} image={book.imageLinks} key={book.title}/>
                    })}
                </div>
            </div>}
        </>
        )}

export default Booklist