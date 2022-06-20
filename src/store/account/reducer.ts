import { AccountActionsTypes } from './actions';
import { UserType } from './../../types/users.d';
const initialState = {
    user: null as UserType | null
}

export type AccountStateType = typeof initialState

export const accountReducer = (state = initialState, action: AccountActionsTypes): AccountStateType => {
    switch (action.type) {
        case "account/setUser": {
            return {
                ...state,
                user: action.user
            }
        }
        default: {
            return state
        }
    }
}