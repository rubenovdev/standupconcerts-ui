import { appActions } from './../app/actions';
import { getCookie, setCookie } from './../../utils/cookie';
import { usersAPI } from './../../API/users';
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from './../rootReducer';
import { InferValueTypes } from './../../types/common.d';
import { UserType } from './../../types/users.d';

const type = "account"

export const accountActions = {
    setUser: (user: UserType | null) => ({
        type: `${type}/setUser` as const,
        user
    }),
}

export const fetchCurrentUser = (): ThunkActionType => async (dispatch) => {
    if (!getCookie("jwt")) {
        dispatch(appActions.setLoaded(true))
        return
    }

    try {
        const { data } = await usersAPI.getCurrent()

        if (data.error) {
            return
        }

        if (data.result) {
            dispatch(accountActions.setUser(data.result.user))
        }
    } catch (e) {
        setCookie("jwt", "", 0)
    } finally {
        dispatch(appActions.setLoaded(true))
    }
}

export const logout = (): ThunkActionType => (dispatch) => {
    dispatch(accountActions.setUser(null))
    setCookie("jwt", "", 0)
}

export const updateCurrentUser = (user: Partial<UserType>): ThunkActionType => async (dispatch) => {
    await usersAPI.currentUpdate(user)
    dispatch(fetchCurrentUser())    
}

export const updateCurrentUserPassword = (password: string): ThunkActionType => async (dispatch) => {
    await usersAPI.currentUpdatePassword(password)
}

export const updateCurrentUserImage = (image: File): ThunkActionType => async (dispatch) => {
    await usersAPI.currentUpdateImage(image)
    dispatch(fetchCurrentUser())    
}

export const appendFavoriteConcert = (concertId: number): ThunkActionType => async (dispatch) => {
    await usersAPI.currentAppendFavoriteConcert(concertId)
    dispatch(fetchCurrentUser())
}

export const deleteFavoriteConcert = (concertId: number): ThunkActionType => async (dispatch) => {
    await usersAPI.currentDeleteFavoriteConcert(concertId)
    dispatch(fetchCurrentUser())
}

export const appendFavoriteComedian = (comedianId: number): ThunkActionType => async (dispatch) => {
    await usersAPI.currentAppendFavoriteComedian(comedianId)
    dispatch(fetchCurrentUser())
}

export const deleteFavoriteComedian = (comedianId: number): ThunkActionType => async (dispatch) => {
    await usersAPI.curentDeleteFavoriteComedian(comedianId)
    dispatch(fetchCurrentUser())
}

export type AccountActionsTypes = ReturnType<InferValueTypes<typeof accountActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, any>