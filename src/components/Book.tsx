import React from "react";

function Book({title, authors, categories, image, key}:any){
    return(
        <div key={key} className={'Book'}>
            <img src={image} alt={title} className={"book-img"} />
            <div className={'book-info'}>
                <div className={'book-categories'}>{categories}</div>
                <div className={'book-title'}>{title}</div>
                <div className={'book-authors'}>{authors}</div>
            </div>
        </div>
    )
}

export default Book