import { PasswordRecoveryActionsTypes } from './actions';
const initialState = {

}

export type PasswordRecoveryStateType = typeof initialState

export const passwordRecoveryReducer = (state = initialState, action: PasswordRecoveryActionsTypes): PasswordRecoveryStateType => {
    switch(action.type) {

        default: {
            return state
        }
    }
}   