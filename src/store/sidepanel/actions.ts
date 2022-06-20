import { ThunkAction } from "redux-thunk"
import { InferValueTypes } from "../../types/common"
import { RootStateType } from "../rootReducer"

const type = "sidepanel"

export const sidepanelActions = {
    setIsOpened: (isOpened: boolean) => ({
        type: `${type}/setIsOpened` as const,
        isOpened
    })
}

export type SidepanelActionsTypes = ReturnType<InferValueTypes<typeof sidepanelActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, SidepanelActionsTypes>