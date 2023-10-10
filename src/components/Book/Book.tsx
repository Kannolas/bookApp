import {FunctionComponent} from "react";
import c from './Book.module.css'
import {useNavigate} from "react-router-dom";

interface BookProps{
    title: string,
    authors?: Array<string>,
    categories?: Array<string>,
    image: string,
    id: string,
    date:string
}

const Book:FunctionComponent<BookProps> = ({title, authors, categories, image, id, date}:BookProps)=>{
    const navigate = useNavigate()
    const handleRedirect = ()=>{
       navigate(`/book/${id}`)
    }
    return(
    <div key={id} className={c.Book} onClick={handleRedirect}>
        <img src={image} alt={title} className={c['book-img']} />
        <div className={c['book-info']}>
            <div className={c['book-categories']}>{((categories===null)||(categories===undefined))?'':categories[0]}</div>
            <div className={c['book-title']}>{title}</div>
            <div className={c['book-authors']}>{authors}</div>
        </div>
    </div>
    )
}

export default Book;