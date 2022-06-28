import { concertsAPI } from './../../API/concerts';
import { ConcertType } from './../../types/concerts.d';
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
    }),
    setCurrentComedianConcerts: (concerts: Array<ConcertType>) => ({
        type: `${type}/setCurrentComedianConcerts` as const,
        concerts
    }),
    setCurrentComedianFiltersYear: (year: string) => ({
        type: `${type}/setCurrentComedianFiltersYear` as const,
        year
    }),
    setCurrentComedianFiltersSortBy: (sortBy: string) => ({
        type: `${type}/setCurrentComedianFiltersSortBy` as const,
        sortBy
    }),
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

export const fetchCurrentComedianConcerts = (comedianId: number): ThunkActionType => async (dispatch, getState) => {
    const filters = { ...getState().comediansReducer.currentComedianFilters, comedianId }

    const { data: { result, error } } = await concertsAPI.getAll(filters)

    if (result) {
        dispatch(comediansActions.setCurrentComedianConcerts(result.concerts))
    }
}

export const dislikeComedian = (comedianId: number): ThunkActionType => async (dispatch, getState) => {
    const user = getState().accountReducer.user

    if (!user) {
        return
    }
    await usersAPI.dislike(comedianId)
    dispatch(fetchComedian(comedianId))
}

export const likeComedian = (comedianId: number): ThunkActionType => async (dispatch, getState) => {
    const user = getState().accountReducer.user

    if (!user) {
        return
    }
    await usersAPI.like(comedianId)
    dispatch(fetchComedian(comedianId))
}

export type ComediansActionsType = ReturnType<InferValueTypes<typeof comediansActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, any>