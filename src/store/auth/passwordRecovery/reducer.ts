import { PasswordRecoveryActionsTypes } from './actions';
const initialState = {
    isSent: false
}

export type PasswordRecoveryStateType = typeof initialState

export const passwordRecoveryReducer = (state = initialState, action: PasswordRecoveryActionsTypes): PasswordRecoveryStateType => {
    switch(action.type) {
        case "auth/passwordRecovery/setIsSent": {
            return {
                ...state,
                isSent: action.isSent
            }
        }
        default: {
            return state
        }
    }
}   