import { LoginActionsTypes } from "./actions"

const initialState = {
    vk: {
        email: null as string | null,
        id: null as string | null,
        accessToken: null as string | null
    },
    yandex: {
        accessToken: null as string | null
    }
}

export type LoginStateType = typeof initialState

export const loginReducer = (state = initialState, action: LoginActionsTypes): LoginStateType => {
    switch (action.type) {
        case "auth/login/setId": {
            return {
                ...state,
                vk: {
                    ...state.vk,
                    id: action.id
                }
            }
        }
        case "auth/login/setVkAccessToken": {
            return {
                ...state,
                vk: {
                    ...state.vk,
                    accessToken: action.accessToken
                }
            }
        }
        case "auth/login/setVkEmail": {
            return {
                ...state,
                vk: {
                    ...state.vk,
                    email: action.email
                }
            }
        }
        case "auth/login/setYandexAccessToken": {
            return {
                ...state,
                yandex: {
                    ...state.yandex,
                    accessToken: action.accessToken
                }
            }
        }
        default: {
            return state
        }
    }
}
