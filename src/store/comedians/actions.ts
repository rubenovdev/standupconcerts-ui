import { usersAPI } from './../../API/users';
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from './../rootReducer';
import { InferValueTypes } from './../../types/common.d';
import { UserType } from './../../types/users.d';

const type = "comedians"

export const comediansActions = {
    setCurrentComedian: (comedian: UserType) => ({
        type: `${type}/setCurrentComedian` as const,
        comedian
    }),
    setComedians: (comedians: Array<UserType>) => ({
        type: `${type}/setComedians` as const,
        comedians
    })
}

export const fetchComedian = (id: number): ThunkActionType => async (dispatch) => {
    const { data: { result } } = await usersAPI.get(id)

    if (result) {
        dispatch(comediansActions.setCurrentComedian(result.user))
    }
}

export const fetchComedians = (): ThunkActionType => async (dispatch) => {
    const { data } = await usersAPI.getAll({})

    if (data.result) {
        dispatch(comediansActions.setComedians(data.result.users))
    }
}

export type ComediansActionsType = ReturnType<InferValueTypes<typeof comediansActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, any>