import React from "react";
import {useAppSelector} from "../hooks/redux";
import {VolumeInfo} from "../types/types";
import Book from "./Book";
import LoadingSpinner from "./spinner/LoadingSpinner";
import notFoundImg from '../imgs/image_not_available.png'
function Booklist(){
    const {books, isLoading, error, totalBooks, totalBooksCount, sortingMethod} = useAppSelector(state => state.bookSlice)
    const compareBooks = (a:VolumeInfo, b:VolumeInfo):number =>{
        // Сначала сравниваем по publishedDate
        const dateA = new Date(a.publishedDate);
        const dateB = new Date(b.publishedDate);
        if (dateA < dateB) {
            return -1;
        }
        if (dateA > dateB) {
            return 1;
        }

        // Если даты совпадают, сравниваем по title
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }

        return 0; // Элементы считаются равными
    }
    return(<>
            <div className={'Booklist'}>
                <div className={'Booklist-allcont'}>
                    <div className={'Booklist-found'}>Books found:{totalBooksCount}</div>
                    <div className={'Booklist-cont'}>
                        {sortingMethod!=='newest'?books.map((book: VolumeInfo)=>{
                            return <Book title={book.title} authors={book.authors} categories={book.categories} image={book.imageLinks?book.imageLinks.thumbnail:notFoundImg} key={book.title}/>
                        }):books.sort(compareBooks).map((book: VolumeInfo)=>{
                            return <Book title={book.title} authors={book.authors} categories={book.categories} image={book.imageLinks?book.imageLinks.thumbnail:notFoundImg} key={book.title}/>
                        })}
                    </div>
                    {error!==''?<div className={'error-message'}>{error}</div>:isLoading?<div className={'loading'}><LoadingSpinner/></div>:''}
                </div>
            </div>
        </>
        )}

export default Booklist