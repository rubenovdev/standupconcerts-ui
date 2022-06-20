import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalUpdateVideo } from '../../../../components/Inner/Modals/ModalUpdateVideo'
import { ModalDeleteVideo } from '../../../../components/Inner/Modals/ModalDeleteVideo'
import { ModalSaveVideo } from '../../../../components/Inner/Modals/ModalSaveVideo'
import { ModalUploadVideo } from '../../../../components/Inner/Modals/ModalUploadVideo'
import { concertsActions, createConcert, deleteConcert, fetchYoutubeVideo, updateConcert } from '../../../../store/concerts/actions'
import { RootStateType } from '../../../../store/rootReducer'
import { CreateConcertDto } from '../../../../types/API/concerts'
import { ConcertType } from '../../../../types/concerts'
import { portal } from '../../../../utils/portal'
import { ModalUploadVideoYoutube } from '../../../../components/Inner/Modals/ModalUploadVideoYoutube'

const iconLike = require("../../../../assets/img/like.png")
const iconCash = require("../../../../assets/img/cash.png")

export const CabinetComedianVideos = () => {
    const user = useSelector((state: RootStateType) => state.accountReducer.user)
    const deletableConcertId = useSelector((state: RootStateType) => state.concertsReducer.deletableConcertId)
    const editableConcert = useSelector((state: RootStateType) => state.concertsReducer.editableConcert)

    const [isModalUploadVideoYoutubeActive, setIsModalUploadVideoYoutubeActive] = useState<boolean>(false)
    const [isModalUploadVideoActive, setIsModalUploadVideoActive] = useState<boolean>(false)
    const [isModalDeleteVideoActive, setIsModalDeleteVideoActive] = useState<boolean>(false)
    const [isModalSaveVideoActive, setIsModalSaveVideoActive] = useState<boolean>(false)
    const [isModalUpdateVideoActive, setIsModalUpdateVideoActive] = useState<boolean>(false)

    const dispatch = useDispatch()

    return (
        <>
            <div className="cabinet__login1" style={{ width: "1044px" }}>
                <div className="videoPar">
                    <h2>Записи моих концертов</h2>
                    <a onClick={() => setIsModalUploadVideoActive(true)} href="#"><img src={iconCash} alt="" /> Загрузить новое видео</a>
                </div>
                <p style={{ opacity: ".5", padding: "13px 0 36px" }}>СПИСОК ВАШИХ ВЫСТУПЛЕНИЙ</p>
                {user?.concerts && user.concerts.map((concert) =>
                (
                    <div className="video" key={concert.id}>
                        <video width="253" preload="metadata">
                            <source src={`http://localhost:8080/${concert.filepath}`} />
                        </video>
                        <p className="videoName">{concert.title}</p>
                        <p className="videoViews">{concert.watchCount} просмотров <img src={iconLike} alt="" />{concert.likesCount}</p>
                        <button onClick={() => {
                            dispatch(concertsActions.setEditableConcert(concert))
                            dispatch(concertsActions.setEditableConcertId(concert.id))
                            setIsModalUpdateVideoActive(true)
                        }}>Изменить</button>
                        <button onClick={() => {
                            dispatch(concertsActions.setDeletableConcertId(concert.id))
                            setIsModalDeleteVideoActive(true)
                        }
                        }>Удалить</button>
                    </div>
                ))}
            </div >
            {portal(<ModalUploadVideo active={isModalUploadVideoActive} uploadFromYoutube={() => {
                setIsModalUploadVideoActive(false)
                setIsModalUploadVideoYoutubeActive(true)
            }} setActive={setIsModalUploadVideoActive} fileUpload={(file) => {
                dispatch(concertsActions.setNewConcertFile(file))
                setIsModalSaveVideoActive(true)
            }} />)}
            {portal(<ModalUploadVideoYoutube active={isModalUploadVideoYoutubeActive} setActive={setIsModalUploadVideoYoutubeActive} fileUpload={(link) => {
                dispatch<any>(fetchYoutubeVideo())
                setIsModalUploadVideoYoutubeActive(false)
                setIsModalSaveVideoActive(true)
           }} />)}
            {portal(<ModalDeleteVideo active={isModalDeleteVideoActive} setActive={setIsModalDeleteVideoActive} onDelete={() => deletableConcertId && dispatch<any>(deleteConcert(deletableConcertId))} />)}
            {portal(<ModalSaveVideo active={isModalSaveVideoActive} setActive={setIsModalSaveVideoActive} onSubmit={(values: Partial<CreateConcertDto>) => dispatch<any>(createConcert(values))} />)}
            {editableConcert && portal(<ModalUpdateVideo active={isModalUpdateVideoActive} setActive={setIsModalUpdateVideoActive} onChange={(values: Partial<ConcertType>) => dispatch<any>(updateConcert(values))} concert={editableConcert} />)}
        </>
    )
}
