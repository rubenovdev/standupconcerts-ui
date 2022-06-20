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

export type GetConcertsFiltersType = {
    comedianId: string
    sortBy: string
    year: string
}

export type GetCommentsType = {
    comments: Array<CommentType>
}