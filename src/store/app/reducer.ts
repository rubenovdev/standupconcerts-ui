import { AppActionsTypes } from './actions';
const initialState = {
    loaded: false
}

export type AppStateType = typeof initialState

export const appReducer = (state = initialState, action: AppActionsTypes): AppStateType => {
    switch (action.type) {
        case "app/setLoaded": {
            return {
                ...state,
                loaded: action.loaded
            }
        }
        default: {
            return state
        }
    }
}