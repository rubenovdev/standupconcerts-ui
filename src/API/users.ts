import { GetCurrentUserResponseType, GetUserResponseType, GetUsersRepsonseType } from './../types/API/users.d';
import { BaseResponseType } from './../types/API/base.d';
import { base } from './base';
import { UserType } from './../types/users.d';

const baseURL = "/users"

export const usersAPI = {
    getAll({ role = "" }) {
        return base.get<BaseResponseType<GetUsersRepsonseType>>(`${baseURL}`, {
            params: {
                role: role || null
            }
        })
    },
    get(id: number) {
        return base.get<BaseResponseType<GetUserResponseType>>(`${baseURL}/${id}`)
    },
    delete(id: number) {
        return base.delete<Array<UserType>>(`${baseURL}`)
    },
    currentUpdate(user: Partial<UserType>) {
        return base.put<Array<UserType>>(`${baseURL}/current`, JSON.stringify(user))
    },
    getCurrent() {
        return base.get<BaseResponseType<GetCurrentUserResponseType>>(`${baseURL}/current`)
    },
    currentUpdateImage(image: File) {
        const formData = new FormData()
        formData.append("image", image)

        return base.put<Array<UserType>>(`${baseURL}/current/image`, formData)

    },
    currentUpdatePassword(password: string) {
        return base.put<Array<UserType>>(`${baseURL}/current/password`, JSON.stringify({ password }))

    },
    currentAppendFavoriteConcert(concertId: number) {
        return base.put<Array<UserType>>(`${baseURL}/current/favorite-concerts/${concertId}`,)

    },
    currentAppendSubscription(concertId: number) {
        return base.put<Array<UserType>>(`${baseURL}/current/subscriptions/${concertId}`,)

    },
    currentAppendFavoriteComedian(comedianId: number) {
        return base.put<Array<UserType>>(`${baseURL}/current/favorite-comedians/${comedianId}`,)

    },
    currentDeleteFavoriteConcert(concertId: number) {
        return base.delete<Array<UserType>>(`${baseURL}/current/favorite-concerts/${concertId}`,)

    },
    currentDeleteSubscription(concertId: number) {
        return base.delete<Array<UserType>>(`${baseURL}/current/subscriptions/${concertId}`,)

    },
    curentDeleteFavoriteComedian(comedianId: number) {
        return base.delete<Array<UserType>>(`${baseURL}/current/favorite-comedians/${comedianId}`,)
    },
    like(id: number) {
        return base.put<void>(`${baseURL}/${id}/like`)
    },
    dislike(id: number) {
        return base.put<void>(`${baseURL}/${id}/dislike`)
    }
}