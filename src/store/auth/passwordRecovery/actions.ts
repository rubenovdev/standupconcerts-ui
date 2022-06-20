import { authAPI } from './../../../API/auth';
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from './../../rootReducer';
import { InferValueTypes } from './../../../types/common.d';

const type = "auth/passwordRecovery"

export const passwordRecoveryActions = {

}

export const passwordRecovery = (email: string): ThunkActionType => async (dispatch) => {
    await authAPI.passwordRecovery(email)
}

// @ts-ignore
export type PasswordRecoveryActionsTypes = ReturnType<InferValueTypes<typeof passwordRecoveryActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, PasswordRecoveryActionsTypes>