import { CommentType } from './../comments.d';
import { ConcertType } from './../concerts.d';
export type CreateConcertDto = {
    file: File,
    title: string,
    description: string
}

export type GetConcertsResponseType = {
    concerts: Array<ConcertType>
}

export type GetConcertResponseType = {
    concert: ConcertType
}

export type GetCommentsType = {
    comments: Array<CommentType>
}

export type GetConcertsFiltersType = {
    year: number | string | null
    sortBy: number | string | null
    comedianId: number | string | null
    excludedId: number | string | null
    limit: number | string | null
}