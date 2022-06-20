import { fetchCurrentUser } from './../../account/actions';
import { setCookie } from './../../../utils/cookie';
import { authAPI } from './../../../API/auth';
import { SignInDtoType } from './../../../types/API/auth.d';
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from './../../rootReducer';
import { InferValueTypes } from './../../../types/common.d';
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

// @ts-ignore
export type LoginActionsTypes = ReturnType<InferValueTypes<typeof loginActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, LoginActionsTypes>