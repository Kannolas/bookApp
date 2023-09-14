import React, {useState} from "react";
import {useNavigate} from "react-router-dom";



function Book({title, authors, categories, image, id, date}:any){
    const navigate = useNavigate()
    const handleRedirect = ()=>{
       navigate(`/book/${id}`)
    }
    return(
    <div key={id} className={'Book'} onClick={handleRedirect}>
        <img src={image} alt={title} className={"book-img"} onClick={handleRedirect}/>
        <div className={'book-info'}>
            <div className={'book-categories'}>{categories}</div>
            <div className={'book-title'}>{title}</div>
            <div className={'book-authors'}>{authors}</div>
            <div>date:{date}</div>
        </div>
    </div>
    )
}

export default Book