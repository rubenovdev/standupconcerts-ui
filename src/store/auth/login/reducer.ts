import { LoginActionsTypes } from "./actions"

const initialState = {

}

export type LoginStateType = typeof initialState

export const loginReducer = (state = initialState, action: LoginActionsTypes): LoginStateType => {
    switch (action.type) {

        default: {
            return state
        }
    }
}
