import { BaseResponseType } from './../types/API/base.d';
import { base } from './base';
import { SignUpDtoType, SignInDtoType, LoginResponseResultType } from './../types/API/auth.d';

const baseURL = "/auth"

export const authAPI = {
    signIn(dto: SignInDtoType) {
        return base.post<BaseResponseType<LoginResponseResultType>>(`${baseURL}/sign-in`, JSON.stringify(dto))
    },
    signUp(dto: SignUpDtoType) {
        return base.post<BaseResponseType>(`${baseURL}/sign-up`, JSON.stringify(dto))

    },
    passwordRecovery(email: string) {
        return base.post<BaseResponseType>(`${baseURL}/password-recovery`, JSON.stringify({ email }))
    }
}