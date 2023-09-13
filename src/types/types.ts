export type VolumeInfo = {
    title: string
    publisher: string
    authors?: Array<string>
    publishedDate: string
    description?: string
    pageCount: number
    dimensions?: {height?: string, width?: string, thickness?: string}
    categories?: Array<string>
    imageLinks?: {small?: string, thumbnail?: string}
    language: string
    previewLink: string
}

export type SearchParams = {
    searchTerms: string | null
    pageNumber: number
    pageSize: number
    sortingMethod: string | null
    categories: string | null
}

export interface BookState{
    books: VolumeInfo[];
    isLoading: boolean;
    error:string;
    totalBooks:number;
    totalBooksCount: number
}
