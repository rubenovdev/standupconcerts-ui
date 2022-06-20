import { RootStateType } from './../rootReducer';
import { ThunkAction } from 'redux-thunk';
import { InferValueTypes } from './../../types/common.d';
const type = "app"

export const appActions = {
    setLoaded: (loaded: boolean) => ({
        type: `${type}/setLoaded` as const,
        loaded
    })
}

export type AppActionsTypes = ReturnType<InferValueTypes<typeof appActions>>