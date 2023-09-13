    import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import API_KEY from "../info";
    import {VolumeInfo} from "../types/types";
    import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
    export const BookApi = createApi({
        reducerPath: 'bookApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://www.googleapis.com/books/v1/volumes'
        }),
        endpoints: (builder) => ({
            fetchBooks: builder.query<VolumeInfo[], string>({
                query:()=> ({
                    url: `/`,
                    params: {
                        q: `inauthor`,
                        key: API_KEY,
                    }
                })
            })

        })
    })

    export const {} = BookApi