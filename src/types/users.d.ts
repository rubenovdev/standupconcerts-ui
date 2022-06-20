import { ConcertType } from './concerts.d';

export type UserType = {
    id : number     
	imgUrl: string           
	email: string         
	name: string              
	about: string             
	subscriptions: Array<ConcertType>
	favoriteConcerts: Array<ConcertType> 
	favoriteComedians: Array<ConcertType>
	roles: Array<Role> 
	createdAt: Date
	concerts: Array<ConcertType>
}

export type Role = {
	id: number 
	title: string       
	permissions: Array<Permission>
}

export type Permission = {
	id: number
	title: string
}