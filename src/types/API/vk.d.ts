export type VkUser = {
    imgUrl: string
    name: string
    email: string
    id: number
}

export type ResponseVkUser = {
    response: Array<{
        id: number
        photo_400_orig: string
        first_name: string
        last_name: string
    }>
}