import { AppDispatch } from "../store";
import { SearchParams, VolumeInfo } from "../../types/types";
import API_KEY from "../../info";
import { BASE_URL } from "../../info";
import { booksFetching, booksFetchingSuccess, booksFetchingError } from "./BookSlice";
import removeDuplicatesById from "../../funcs/removeDuplicatesById";

export const fetchBooks = ({ searchTerms, pageNumber, pageSize, sortingMethod, categories }: SearchParams) => async (dispatch: AppDispatch) => {
    console.log('fetching');
    dispatch(booksFetching());
    try {
        fetch(`${BASE_URL}?q=${searchTerms !== '' ? searchTerms : '*'}${categories !== 'All' ? `+subject:${categories}` : ''}&orderBy=${sortingMethod}&startIndex=${pageNumber}&maxResults=${pageSize}&key=${API_KEY}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const totalBooksCount: number = data.totalItems;
                if (totalBooksCount === 0) {
                    throw new Error('Books not found');
                }

                const itemsArr = data.items.map((item: any): VolumeInfo => {
                    return {
                        title: item.volumeInfo.title||null,
                        publisher: item.volumeInfo.publisher || null,
                        authors: item.volumeInfo.authors||null,
                        publishedDate: item.volumeInfo.publishedDate||null,
                        description: item.volumeInfo.description||null,
                        pageCount: item.volumeInfo.pageCount || null,
                        categories: item.volumeInfo.categories||null,
                        imageLinks: item.volumeInfo.imageLinks || null,
                        language: item.volumeInfo.language || null,
                        previewLink: item.volumeInfo.previewLink || null,
                        id: item.id,
                    };
                });
                console.log(itemsArr);
                const items:VolumeInfo[] = removeDuplicatesById(itemsArr)
                const payload = {
                    items,
                    totalBooksCount,
                };
                console.log(payload);
                dispatch(booksFetchingSuccess(payload));
            })
            .catch((e) => {
                console.log(e);
                dispatch(booksFetchingError(`${e}`));
            });
    } catch (e) {
        console.log(e);
        dispatch(booksFetchingError(e));
    }
}