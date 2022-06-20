import { UserType } from './users.d';
export type ConcertType = {
    id: number
    filepath: string
    likesCount: number
    watchCount: number
    userId: number
    user: UserType
    title: string
    description: string
    createdAt: Date
    usersLikes: Array<UserType>
}