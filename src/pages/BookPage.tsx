import React from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import {VolumeInfo} from "../types/types";
import notFoundImg from '../imgs/image_not_available.png'

export default function BookPage(){
    const books:VolumeInfo[] = useAppSelector(state => state.bookSlice.books)
    const {id} = useParams()
    const book = books.find((elem)=>elem.id===id)
    return(
        <div className={'BookPage'}>
            <div className={'bookpage-cont'}>
                <div className={'bookpage-img-cont'}><img className={'bookpage-img'} src={book?.imageLinks?.thumbnail || notFoundImg}/></div>
                <div className={'bookpage-info'}>
                    <div className={'bookpage-categories'}>{book?.categories}</div>
                    <div className={'bookpage-title'}>{book?.title}</div>
                    <div className={'bookpage-description'}>{book?.description}</div>
                    <div className={'bookpage-authors'}>{book?.authors}</div>
                    <div className={'bookpage-date'}>{book?.publishedDate}</div>
                </div>
            </div>
        </div>
    )
}