import { ComediansActionsType } from './actions';
import { UserType } from './../../types/users.d';
const initialState = {
    currentComedian: null as UserType | null,
    comedians: [] as Array<UserType>
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
        default: {
            return state
        }
    }
}