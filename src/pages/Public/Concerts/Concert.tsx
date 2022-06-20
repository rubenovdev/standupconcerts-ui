import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ConcertBlock } from '../../../components/Common/ConcertBlock'
import { fetchComments, fetchConcert, fetchOthersConcert, likeComment, likeConcert, saveComment } from '../../../store/concerts/actions'
import { RootStateType } from '../../../store/rootReducer'
// @ts-ignore
import captureVideoFrame from "capture-video-frame";

const iconLike = require("../../../assets/img/like.png")

export const Concert = () => {
    const dispatch = useDispatch()
    const concert = useSelector((state: RootStateType) => state.concertsReducer.currentConcert)
    const comments = useSelector((state: RootStateType) => state.concertsReducer.currentConcertComments)
    const user = useSelector((state: RootStateType) => state.accountReducer.user)
    const otherConcerts = useSelector((state: RootStateType) => state.concertsReducer.otherConcers)
    let frame:

    useEffect(() => {
        frame = captureVideoFrame("video", "png", 1)
        console.log(frame, "http://localhost:8080/" + concert?.filepath)
    }, [concert])

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
                <div className="container">
                    <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Каталог</span></p>
                    <div className="mainSec">
                        <div className="aboutTxt1Par">
                            <p className="aboutTxt1_1">{concert?.title}</p>

                        </div>
                        <div className="photoDiv" style={{ backgroundImage: `url("${URL.createObjectURL(new Blob([frame?.blob]))}")` }}>
                            <a href="">Смотреть по подписке</a>
                        </div>
                        <video src={"http://localhost:8080/" + concert?.filepath} controls id="video"></video>
                        <div className="aboutDiv">

                            <p className="aboutTxt1">{concert?.title}</p>
                            <div className="aboutTxt2Div">
                                <span>2019</span>
                                <span>34 минут</span>
                                <div>
                                    <img src="./img/catalogopenSmall.png" alt="" />
                                    <span>{concert?.title}</span>
                                </div>
                            </div>
                            <p className="aboutTxt3">описание</p>
                            <p className="aboutTxt4">{concert?.description}</p>
                        </div>
                    </div>
                    <div className="mainButsPar">
                        <button className="mainButs">
                            <img src="./img/izbrannoe.png" alt="" />
                            <p>Добавить в избранные</p>
                        </button>
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
                        <div className="sendComent">
                            <div className="comPar">
                                <img width="35px" height="36px" src={`http://localhost:8080/${user?.imgUrl}`} alt="" />
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
                        <div className="comments">
                            {
                                comments.map(comment => (
                                    <div className="comment">
                                        <img width="35px" height="36px" src={`http://localhost:8080/${comment.user.imgUrl}`} alt="" />
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
