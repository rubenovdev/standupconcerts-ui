import { authAPI } from './../../../API/auth';
import { SignUpDtoType } from './../../../types/API/auth.d';
import { RootStateType } from './../../rootReducer';
import { InferValueTypes } from './../../../types/common.d';
import { ThunkAction } from 'redux-thunk';

const type = "auth/registration"

export const registrationActions = {

}

// @ts-ignore
export type RegistrationActionsTypes = ReturnType<InferValueTypes<typeof registrationActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, RegistrationActionsTypes>

export const registration = (data: SignUpDtoType): ThunkActionType => async (dispatch) => {
    try {
        await authAPI.signUp(data)
    } catch (e) {
        alert("Ошибка")
        console.log(e)
    }
}