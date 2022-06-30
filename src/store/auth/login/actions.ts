import { VkUser } from './../../../types/API/vk.d';
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
    setVkAccessToken: (accessToken: string | null) => ({
        type: `${type}/setVkAccessToken` as const,
        accessToken
    }),
    setVkEmail: (email: string | null) => ({
        type: `${type}/setVkEmail` as const,
        email
    }),
    setVkId: (id: string | null) => ({
        type: `${type}/setId` as const,
        id
    }),
    setYandexAccessToken: (accessToken: string | null) => ({
        type: `${type}/setYandexAccessToken` as const,
        accessToken
    })
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

export const vkRedirect = (): ThunkActionType => async (dispatch) => {
    vkAPI.redirect()
}

export const yandexRedirect = (): ThunkActionType => async (dispatch) => {
    yandexAPI.redirect()
}

export const vkAuth = (): ThunkActionType => async (dispatch, getState) => {
    const { email, id, accessToken } = getState().authReducer.loginReducer.vk
    if (!(email && id && accessToken)) {
        return
    }

    const user = await vkAPI.signIn(accessToken, id, {
        email
    })

    const { data: { result, error } } = await authAPI.authVk(user as VkUser)

    if (result) {
        setCookie("jwt", result.jwt)
        dispatch(fetchCurrentUser())
    }
    loginActions.setVkAccessToken(null)
    loginActions.setVkEmail(null)
    loginActions.setVkId(null)
}

export const yandexAuth = (): ThunkActionType => async (dispatch, getState) => {
    const accessToken = getState().authReducer.loginReducer.yandex.accessToken
    
    if (!accessToken) {
        return
    }

    const user = await yandexAPI.signIn(accessToken)

    const { data: { result, error } } = await authAPI.authYandex(user)

    if (result) {
        setCookie("jwt", result.jwt)
        dispatch(fetchCurrentUser())
    }

    loginActions.setYandexAccessToken(null)
}

export type LoginActionsTypes = ReturnType<InferValueTypes<typeof loginActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, LoginActionsTypes>