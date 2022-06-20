import { RegistrationActionsTypes } from './actions';

const initalState = {

}

export type RegistrationStateType = typeof initalState

export const registrationReducer = (state = initalState, action: RegistrationActionsTypes): RegistrationStateType => {
    switch (action.type) {
        default: {
            return state
        }
    }
}