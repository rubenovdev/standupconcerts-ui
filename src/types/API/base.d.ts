export type BaseResponseType<T = {}> = {
    message: string,
    result?: T,
    error?: string
}