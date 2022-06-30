import { Form, Formik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ConcertBlock } from '../../../components/Common/ConcertBlock'
import { appendFavoriteConcert, deleteFavoriteConcert } from '../../../store/account/actions'
import { fetchComments, fetchConcert, fetchOthersConcert, likeComment, likeConcert, saveComment } from '../../../store/concerts/actions'
import { RootStateType } from '../../../store/rootReducer'

const iconLike = require("../../../assets/img/like.png")
const iconFavorite = require("../../../assets/img/izbrannoe.png")
const iconOpenCatalog = require("../../../assets/img/catalogopenSmall.png")

export const Concert = () => {
    const dispatch = useDispatch()
    const concert = useSelector((state: RootStateType) => state.concertsReducer.currentConcert)
    const comments = useSelector((state: RootStateType) => state.concertsReducer.currentConcertComments)
    const user = useSelector((state: RootStateType) => state.accountReducer.user)
    const otherConcerts = useSelector((state: RootStateType) => state.concertsReducer.otherConcers)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [videoDuration, setVideoDuration] = useState<null | number>(null)
    const { id } = useParams()

    useEffect(() => {
        if (!id) {
            return
        }

        dispatch<any>(fetchConcert(+id))
        dispatch<any>(fetchOthersConcert(+id))
        dispatch<any>(fetchComments(+id))

    }, [id])

    return (
        <>
            <section id="sec1">
                <Helmet>
                    <title>{concert?.title}</title>
                </Helmet>
                <div className="container">
                    <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Каталог</span></p>
                    <div className="mainSec">
                        <div className="aboutTxt1Par">
                            <p className="aboutTxt1_1">{concert?.title}</p>

                        </div>
                        {
                            <div className="photoDiv" style={{ backgroundImage: `url("${process.env.REACT_APP_STORAGE}/${concert?.frameSrc}")` }}>
                                <a href="">Смотреть по подписке</a>
                            </div>
                        }
                        <video src={`${process.env.REACT_APP_STORAGE}/${concert?.videoSrc}`} ref={videoRef} hidden onLoadedMetadata={e => {
                            videoRef.current && setVideoDuration(videoRef.current?.duration)
                        }}>
                        </video>
                        <div className="aboutDiv">

                            <p className="aboutTxt1">{concert?.title}</p>
                            <div className="aboutTxt2Div">
                                <span>{concert && new Date(concert?.createdAt).getFullYear()}</span>
                                <span>{videoDuration && (Math.floor(videoDuration / 60) ? `${Math.floor(videoDuration / 60)} минут` : `${Math.floor(videoDuration)} секунд`)}</span>
                                <div>
                                    <img src={`${process.env.REACT_APP_STORAGE}/${concert?.user.imgUrl}`} alt="" />
                                    <span>{concert?.user.name}</span>
                                </div>
                            </div>
                            <p className="aboutTxt3">описание</p>
                            <p className="aboutTxt4">{concert?.description}</p>
                        </div>
                    </div>
                    <div className="mainButsPar">
                        {
                            id && user && (user?.favoriteConcerts.find(concert => concert.id === +id) ?
                                <button onClick={() => {
                                    id && dispatch<any>(deleteFavoriteConcert(+id))
                                }} className="mainButs">
                                    <img src={iconFavorite} alt="" />
                                    <p>Удалить из избранных</p>
                                </button>
                                :
                                <button onClick={() => {
                                    id && dispatch<any>(appendFavoriteConcert(+id))
                                }} className="mainButs">
                                    <img src={iconFavorite} alt="" />
                                    <p>Добавить в избранные</p>
                                </button>
                            )}
                        <button className="mainButs" onClick={() => {
                            concert && dispatch<any>(likeConcert(concert.id))
                        }}>
                            <img src={iconLike} alt="" />
                            <p>{concert?.likesCount}</p>
                        </button>
                    </div>
                </div>
            </section>

            <section id="CatalogSec2">
                <div className="container">
                    <div className="commentsPar">
                        <p className="commentsTxt1">Комментарии</p>
                        {user && <div className="sendComent">
                            <div className="comPar">
                                <img width="35px" height="36px" src={`${process.env.REACT_APP_STORAGE}/${user?.imgUrl}`} alt="" />
                                <span className="DnoneSpan" style={{ color: "white" }}>Иван Иванов</span>
                            </div>

                            <div>
                                <Formik
                                    initialValues={{
                                        body: ""
                                    }}
                                    onSubmit={(values) => {
                                        id && dispatch<any>(saveComment(+id, values.body))
                                    }}
                                >
                                    {({ values, submitForm, handleChange }) => (
                                        <Form>
                                            <input value={values.body} onChange={handleChange} name="body" className="commentInput" type="text" placeholder="Ваш комментарий" />
                                            <button onClick={submitForm} type="button" className="commentBut">Оставить комментарий</button>
                                        </Form>
                                    )
                                    }
                                </Formik>
                            </div>

                        </div>
                        }
                        <div className="comments">
                            {
                                comments.map(comment => (
                                    <div className="comment">
                                        <img width="35px" height="36px" src={`${process.env.REACT_APP_STORAGE}/${comment.user.imgUrl}`} alt="" />
                                        <div className="nameCommenterDiv">
                                            <p className="comenter">{comment.user.name}<span>{new Date(comment.createdAt).toLocaleDateString("ru-RU")}</span></p>
                                            <p className="commentTxt">{comment.body}</p>
                                            <div className="likes">
                                                <img onClick={() => {
                                                    id && dispatch<any>(likeComment(+id, comment.id))
                                                }} src={iconLike} alt="" />
                                                <span>{comment.likesCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section id="sec3">
                <div className="container">

                    <p className="sec3Txt">Смотрите еще</p>

                    <div className="elementsPar">
                        {otherConcerts.map(concert => <ConcertBlock concert={concert} />)}
                    </div>
                </div>

            </section>
        </>
    )
}
