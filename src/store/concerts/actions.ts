import { CommentType } from './../../types/comments.d';
import { youtubeAPI } from './../../API/youtube';
import { fetchCurrentUser, accountActions } from '../account/actions';
import { CreateConcertDto } from '../../types/API/concerts';
import { concertsAPI } from '../../API/concerts';
import { ConcertType } from '../../types/concerts';
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from '../rootReducer';
import { InferValueTypes } from '../../types/common';
const type = "concerts"

export const concertsActions = {
    setConcerts: (concerts: Array<ConcertType>) => ({
        type: `${type}/setConcerts` as const,
        concerts
    }),
    setNewConcertFile: (file: File) => ({
        type: `${type}/setNewConcertFile` as const,
        file
    }),
    setDeletableConcertId: (concertId: number) => ({
        type: `${type}/setDeletableConcertId` as const,
        concertId
    }),
    setEditableConcertId: (concertId: number) => ({
        type: `${type}/setEditableConcertId` as const,
        concertId
    }),
    setEditableConcert: (concert: ConcertType) => ({
        type: `${type}/setEditableConcert` as const,
        concert
    }),
    setCurrentConcert: (concert: ConcertType) => ({
        type: `${type}/setCurrentConcert` as const,
        concert
    }),
    setFiltersConcertsComedianId: (comedianId: string) => ({
        type: `${type}/setFiltersConcertsComedianId` as const,
        comedianId
    }),
    setFiltersConcertsYear: (year: string) => ({
        type: `${type}/setFiltersConcertsYear` as const,
        year
    }),
    setFiltersConcertsSortBy: (sortBy: string) => ({
        type: `${type}/setFiltersConcertsSortBy` as const,
        sortBy
    }),
    setOthersConcerts: (concerts: Array<ConcertType>) => ({
        type: `${type}/setOtherConcerts` as const,
        concerts
    }),
    setCurrentConcertComments: (comments: Array<CommentType>) => ({
        type: `${type}/setCurrentConcertComments` as const,
        comments
    }),
    setProgressUploadConcert: (progressUploadConcert: number | null) => ({
        type: `${type}/setProgressUploadConcert` as const,
        progressUploadConcert
    }),
    setIndexConcerts: (concerts: Array<ConcertType>) => ({
        type: `${type}/setIndexConcerts` as const,
        concerts
    })
}

export const createConcert = (dto: Partial<CreateConcertDto>): ThunkActionType => async (dispatch, getState) => {
    const file = getState().concertsReducer.newConcert.file

    if (!file) {
        return
    }
    dto.file = file

    const fullDto = dto as CreateConcertDto

    await concertsAPI.create(fullDto, (progress) => {
        dispatch(concertsActions.setProgressUploadConcert(progress))
    })
    dispatch(fetchCurrentUser())
}

export const deleteConcert = (concertId: number): ThunkActionType => async (dispatch) => {
    await concertsAPI.delete(concertId)
    dispatch(fetchCurrentUser())
}

export const updateConcert = (concert: Partial<ConcertType>): ThunkActionType => async (dispatch, getState) => {
    const concertId = getState().concertsReducer.editableConcertId
    if (!concertId) {
        return
    }

    await concertsAPI.update(concertId, concert)
    dispatch(fetchCurrentUser())
}

export const fetchConcerts = (): ThunkActionType => async (dispatch, getState) => {
    const { data: { result, error } } = await concertsAPI.getAll(getState().concertsReducer.filtersConcerts)

    if (result) {
        dispatch(concertsActions.setConcerts(result.concerts))
    }
}

export const fetchYoutubeVideo = (): ThunkActionType => async (dispatch) => {
    await youtubeAPI.getVideo("44-Kx5ZZTsY")
}

export const fetchConcert = (id: number): ThunkActionType => async (dispatch) => {
    const { data: { result } } = await concertsAPI.get(id)

    if (result) {
        console.log("result", result.concert)
        dispatch(concertsActions.setCurrentConcert(result.concert))
    }
}

export const fetchOthersConcert = (excludedId: number): ThunkActionType => async (dispatch) => {
    const { data: { result } } = await concertsAPI.getAll({ excludedId })

    if (result) {
        dispatch(concertsActions.setOthersConcerts(result.concerts))
    }
}

export const fetchComments = (concertId: number): ThunkActionType => async (dispatch) => {
    const { data: { result } } = await concertsAPI.getComments(concertId)

    if (result) {
        dispatch(concertsActions.setCurrentConcertComments(result.comments))
    }
}

export const saveComment = (concertId: number, body: string): ThunkActionType => async (dispatch) => {
    await concertsAPI.createComment(concertId, body)
    dispatch(fetchComments(concertId))
}

export const likeComment = (concertId: number, commentId: number): ThunkActionType => async (dispatch, getState) => {
    const user = getState().accountReducer.user

    if (!user) {
        return
    }

    await concertsAPI.commentLike(concertId, commentId)
    dispatch(fetchComments(concertId))
}

export const likeConcert = (concertId: number): ThunkActionType => async (dispatch, getState) => {
    const user = getState().accountReducer.user

    if (!user) {
        return
    }
    await concertsAPI.like(concertId)
    dispatch(fetchConcert(concertId))
}

export const fetchIndexConcerts = (): ThunkActionType => async (dispatch) => {
    const { data: { result } } = await concertsAPI.getAll({ limit: 8 })

    if (result) {
        dispatch(concertsActions.setIndexConcerts(result.concerts))
    }
}

export type ConcertsActionsTypes = ReturnType<InferValueTypes<typeof concertsActions>>
type ThunkActionType = ThunkAction<void, RootStateType, unknown, ConcertsActionsTypes>