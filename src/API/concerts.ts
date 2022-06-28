import { BaseResponseType } from './../types/API/base.d';
import { CreateConcertDto, GetConcertsResponseType, GetConcertResponseType, GetCommentsType, GetConcertsFiltersType } from './../types/API/concerts.d';
import { base } from './base';
import { ConcertType } from './../types/concerts.d';
import axios from 'axios';

const baseURL = "/concerts"

export const concertsAPI = {
    getAll({ year = null, sortBy = null, comedianId = null, excludedId = null, limit = null }: Partial<GetConcertsFiltersType>) {
        return base.get<BaseResponseType<GetConcertsResponseType>>(`${baseURL}`, {
            params: {
                year,
                sort_by: sortBy,
                comedian_id: comedianId,
                excluded_id: excludedId,
                limit
            }
        })
    },
    create(dto: CreateConcertDto, progressCb: (progress: number) => void) {

        const options = {
            method: 'GET',
            url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
            params: { id: 'UxxajLWwzqY', geo: 'DE' },
            headers: {
                'X-RapidAPI-Key': 'b6affb09d2mshe55d1d2291015c5p19cb2bjsn9c787a74fcc8',
                'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response: any) {
            axios({
                url: response.data.link[17][0], //your url
                method: 'GET',
                responseType: 'blob', // important
            }).then((response: any) => {
                console.log(response.data)
            })
        }).catch(function (error) {
            console.error(error);
        });

        const formData = new FormData()
        console.log("progressCb", progressCb)
        formData.append("concert", dto.file)
        formData.append("title", dto.title)
        formData.append("description", dto.description)

        return base.post<void>(`${baseURL}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
                if (progressEvent.lengthComputable) {
                    progressCb((progressEvent.loaded * 100) / progressEvent.total);
                    // this.updateProgressBarValue(progressEvent);
                }
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