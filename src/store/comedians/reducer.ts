import { ConcertType } from './../../types/concerts.d';
import { ComediansActionsType } from './actions';
import { UserType } from './../../types/users.d';
const initialState = {
    currentComedian: null as UserType | null,
    comedians: [] as Array<UserType>,
    currentComedianConcerts: [] as Array<ConcertType>,
    currentComedianFilters: {
        year: "",
        sortBy: ""
    }
}

export type ComediansStateType = typeof initialState

export const comediansReducer = (state = initialState, action: ComediansActionsType) => {
    switch (action.type) {
        case "comedians/setCurrentComedian": {
            return {
                ...state,
                currentComedian: action.comedian
            }
        }
        case "comedians/setComedians": {
            return {
                ...state,
                comedians: action.comedians
            }
        }
        case "comedians/setCurrentComedianFiltersYear": {
            return {
                ...state,
                currentComedianFilters: {
                    ...state.currentComedianFilters,
                    year: action.year
                }
            }
        }
        case "comedians/setCurrentComedianFiltersSortBy": {
            return {
                ...state,
                currentComedianFilters: {
                    ...state.currentComedianFilters,
                    sortBy: action.sortBy
                }
            }
        }
        case "comedians/setCurrentComedianConcerts": {
            return {
                ...state,
                currentComedianConcerts: action.concerts
            }
        }
        default: {
            return state
        }
    }
}