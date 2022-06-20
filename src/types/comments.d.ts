import { UserType } from './users.d';
import { Concert } from './concerts.d';

export type CommentType = {
    id: number
    userId: number
    user: UserType
    concertId: number
    concert: Concert
    body: string
    likesCount: number
    createdAt: Date
}