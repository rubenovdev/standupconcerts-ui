import { SidepanelActionsTypes } from "./actions"

const initialState = {
    isOpened: false
}

export type InitialStateType = typeof initialState

export const sidepanelReducer = (state = initialState, action: SidepanelActionsTypes): InitialStateType => {
    switch (action.type) {
        case "sidepanel/setIsOpened": {
            return {
                ...state,
                isOpened: action.isOpened
            }
        }
        default: {
            return state
        }
    }
}

