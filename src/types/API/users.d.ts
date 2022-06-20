import { UserType } from './../users.d';
export type GetCurrentUserResponseType = {
    user: UserType
}
export type GetUserResponseType = {
    user: UserType
}

export type GetUsersRepsonseType = {
    users: Array<UserType>
}