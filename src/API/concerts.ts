import { BaseResponseType } from './../types/API/base.d';
import { CreateConcertDto, GetConcertsResponseType, GetConcertResponseType, GetConcertsFiltersType, GetCommentsType } from './../types/API/concerts.d';
import { base } from './base';
import { ConcertType } from './../types/concerts.d';

const baseURL = "/concerts"

export const concertsAPI = {
    getAll({ year = null as string | null, sortBy = null as string | null, comedianId = null as string | null, excludedId = null as number | null }) {
        return base.get<BaseResponseType<GetConcertsResponseType>>(`${baseURL}`, {
            params: {
                year,
                sort_by: sortBy,
                comedian_id: comedianId,
                excluded_id: excludedId
            }
        })
    },
    create(dto: CreateConcertDto) {
        const formData = new FormData()

        formData.append("concert", dto.file)
        formData.append("title", dto.title)
        formData.append("description", dto.description)

        return base.post<void>(`${baseURL}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    get(id: number) {
        return base.get<BaseResponseType<GetConcertResponseType>>(`${baseURL}/${id}`)
    },
    delete(id: number) {
        return base.delete<Array<ConcertType>>(`${baseURL}/${id}`)
    },
    update(id: number, concert: Partial<ConcertType>) {
        return base.put<void>(`${baseURL}/${id}`, JSON.stringify(concert))
    },
    like(id: number) {
        return base.put<Array<ConcertType>>(`${baseURL}/${id}/like`)
    },
    viewsInc(id: number) {
        return base.put<Array<ConcertType>>(`${baseURL}/${id}/views/inc`)
    },
    createComment(concertId: number, body: string) {
        return base.post(`${baseURL}/${concertId}/comments`, JSON.stringify({
            body
        }))
    },
    getComments(concertId: number) {
        return base.get<BaseResponseType<GetCommentsType>>(`${baseURL}/${concertId}/comments`)
    },
    commentLike(concertId: number, commentId: number) {
        return base.put<void>(`${baseURL}/${concertId}/comments/${commentId}/like`)
    },
}