import React from "react";
import {useAppSelector} from "../hooks/redux";
import {VolumeInfo} from "../types/types";
import Book from "./Book/Book";
import LoadingSpinner from "./spinner/LoadingSpinner";
import notFoundImg from '../imgs/image_not_available.png'
function Booklist(){
    const {books, isLoading, error, totalBooksCount} = useAppSelector(state => state.bookSlice)
    return(<>
            <div className={'Booklist'}>
                <div className={'Booklist-allcont'}>
                    <div className={'Booklist-found'}>Books found:{totalBooksCount}</div>
                    <div className={'Booklist-cont'}>
                        {books.map((book: VolumeInfo)=>{
                            return <Book title={book.title} authors={book.authors} categories={book.categories} image={book.imageLinks?book.imageLinks.thumbnail:notFoundImg} id={book.id} date={book.publishedDate}/>
                        })}
                    </div>
                    {error!==''?<div className={'error-message'}>{error}</div>:isLoading?<div className={'loading'}><LoadingSpinner/></div>:''}
                </div>
            </div>
        </>
    )}

export default Booklist