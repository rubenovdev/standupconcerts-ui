import { CommentType } from './../../types/comments.d';
import { ConcertType } from './../../types/concerts.d';
import { ConcertsActionsTypes } from './actions';
const initialState = {
    deletableConcertId: null as number | null,
    editableConcert: null as ConcertType | null,
    editableConcertId: null as number | null,
    concerts: [] as Array<ConcertType>,
    currentConcert: null as ConcertType | null,
    otherConcers: [] as Array<ConcertType>,
    newConcert: {
        file: null as File | null,
        youtubeVideoLink: null as string | null

    },
    currentConcertComments: [] as Array<CommentType>,
    filtersConcerts: {
        comedianId: "",
        year: "",
        sortBy: ""
    },
    progressUploadConcert: null as number | null,
    indexConcerts: [] as Array<ConcertType>,
}

export type ConcertsStateType = typeof initialState

export const concertsReducer = (state = initialState, action: ConcertsActionsTypes): ConcertsStateType => {
    switch (action.type) {
        case "concerts/setNewConcertFile": {
            return {
                ...state,
                newConcert: {
                    ...state.newConcert,
                    file: action.file
                }
            }
        }
        case "concerts/setDeletableConcertId": {
            return {
                ...state,
                deletableConcertId: action.concertId
            }
        }
        case "concerts/setEditableConcertId": {
            return {
                ...state,
                editableConcertId: action.concertId
            }
        }
        case "concerts/setEditableConcert": {
            return {
                ...state,
                editableConcert: action.concert
            }
        }
        case "concerts/setConcerts": {
            return {
                ...state,
                concerts: action.concerts
            }
        }
        case "concerts/setCurrentConcert": {
            return {
                ...state,
                currentConcert: action.concert
            }
        }
        case "concerts/setFiltersConcertsComedianId": {
            return {
                ...state,
                filtersConcerts: {
                    ...state.filtersConcerts,
                    comedianId: action.comedianId
                }
            }
        }
        case "concerts/setFiltersConcertsYear": {
            return {
                ...state,
                filtersConcerts: {
                    ...state.filtersConcerts,
                    year: action.year
                }
            }
        }
        case "concerts/setFiltersConcertsSortBy": {
            return {
                ...state,
                filtersConcerts: {
                    ...state.filtersConcerts,
                    sortBy: action.sortBy
                }
            }
        }
        case "concerts/setOtherConcerts": {
            return {
                ...state,
                otherConcers: action.concerts
            }
        }
        case "concerts/setCurrentConcertComments": {
            return {
                ...state,
                currentConcertComments: action.comments
            }
        }
        case "concerts/setProgressUploadConcert": {
            return {
                ...state,
                progressUploadConcert: action.progressUploadConcert
            }
        }
        case "concerts/setIndexConcerts": {
            return {
                ...state,
                indexConcerts: action.concerts
            }
        }
        case "concerts/setYoutubeVideoLink": {
            return {
                ...state,
                newConcert: {
                    ...state.newConcert,
                    youtubeVideoLink: action.link
                }
            }
        }
        default: {
            return state
        }
    }
}