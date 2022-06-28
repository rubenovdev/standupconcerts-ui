import { GoogleUser } from './../../../types/API/google.d';
import { yandexAPI } from './../../../API/yandex';
import { vkAPI } from './../../../API/vk';
import { fetchCurrentUser } from './../../account/actions';
import { setCookie } from './../../../utils/cookie';
import { authAPI } from './../../../API/auth';
import { SignInDtoType } from './../../../types/API/auth.d';
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from './../../rootReducer';
import { InferValueTypes } from './../../../types/common.d';
import { googleAPI } from '../../../API/google';

const type = "auth/login"

export const loginActions = {

}

export const login = (loginData: SignInDtoType): ThunkActionType => async (dispatch) => {
    try {
        const { data: { result } } = await authAPI.signIn(loginData)

        if (result?.jwt) {
            setCookie("jwt", result.jwt)
            dispatch(fetchCurrentUser())
        }

    } catch (e) {
        alert("Ошибка")
        console.log(e)
    }
}

export const googleAuth = (): ThunkActionType => async (dispatch) => {
    const googleUser = await googleAPI.signIn()

    if (typeof googleUser == "string") {
        alert("Ошибка")
        return
    }

    const { data: { result, error } } = await authAPI.authGoogle(googleUser as GoogleUser)
    if (result) {
        setCookie("jwt", result.jwt)
        dispatch(fetchCurrentUser())
    }
}

export const vkAuth = (): ThunkActionType => async (dispatch) => {
    vkAPI.signIn()
}

export const yandexAuth = (): ThunkActionType => async (dispatch) => {
    yandexAPI.signIn()
}

// @ts-ignore
export type LoginActionsTypes = ReturnType<InferValueTypes<typeof loginActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, LoginActionsTypes>