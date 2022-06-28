import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchIndexConcerts } from '../../store/concerts/actions'
import { RootStateType } from '../../store/rootReducer'
const iconFirstHand = require("../../assets/img/hand1.png")
const iconSecondHand = require("../../assets/img/hand2.png")
const iconThirdHand = require("../../assets/img/hand3.png")

const iconRect3 = require("../../assets/img/rect3.png")
const iconRect4 = require("../../assets/img/rect4.png")
const iconRect5 = require("../../assets/img/rect5.png")
const iconRect6 = require("../../assets/img/rect6.png")
const iconRect7 = require("../../assets/img/rect7.png")
const iconRect8 = require("../../assets/img/rect8.png")
const iconLine = require("../../assets/img/Line.png")
const iconArrow = require("../../assets/img/arrow.png")

export const Index = () => {
    const dispatch = useDispatch()
    const concerts = useSelector((state: RootStateType) => state.concertsReducer.indexConcerts)
    useEffect(() => {
        dispatch<any>(fetchIndexConcerts())
    }, [])

    return (
        <>
            <div className="wrapper__content">
                <Helmet>
                    <title>Главная</title>
                </Helmet>
                <h2 style={{ marginTop: "94px" }}>Смотрте <span>стендап</span> <br /> <span>Выступления</span> от любимых <br />
                    комиков по подписке</h2>
                <p>Отменить подписку можно в любое время</p>
                <div className="wrapper__rect">
                    <img src={iconRect3} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconRect4} alt="" />
                    <img src={iconLine} alt="" />
                    <img src={iconRect5} alt="" />
                    <img src={iconRect6} alt="" />
                    <img src={iconRect7} alt="" />
                    <img src={iconRect8} alt="" />
                </div>
                <p style={{ marginTop: "27px", marginBottom: "55px" }}>Напишем на почту за 4 дня</p>
                <button className="wrapper__button">попробовать 14 дней бесплатно</button>
                <a className="seeMore" href="#indexSec">Узнайте подробнее</a>
                <img src={iconArrow} alt="" style={{ display: "block", margin: "auto", cursor: "pointer" }} />
            </div>
            <main>
                <h2>Выбирайте и смотрите любимые <br /> <span>стендап выступления</span></h2>
                <div className="main-items">
                    {concerts.map(concert => (
                        <Link to={`/catalog/${concert.id}`}>
                            <div className="main-item"><img src={`${process.env.REACT_APP_STORAGE}/${concert.frameSrc}`} alt="person" />
                                <p>{concert.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>


                <button className="wrapper__button">Попробовать 14 дней бесплатно</button>
            </main>
            <section id="indexSec">
                <h2>Смотрите без рекламы <br /><span>в отличном качестве</span></h2>

                <div className="section-items">
                    <div className="section-item">
                        <div className="section__div">
                            <img src={iconThirdHand} alt="" />
                        </div>

                        <h2>Загружайте сериалы <br /> для просмотра офлайн</h2>
                        <p>сохраняйте видео в избранном, <br /> и у вас всегда будет, что посмотреть.</p>
                    </div>
                    <div className="section-item">
                        <div className="section__div">

                            <img src={iconSecondHand} alt="/" />
                        </div>
                        <h2>Встроенные профили <br /> для разных пользователей</h2>
                        <p>для друзей или семьи -- смотрите стендап <br /> и выступления,разделяя один аккаунт</p>
                    </div>
                    <div className="section-item">
                        <div className="section__div">
                            <img src={iconFirstHand} alt="" />
                        </div>

                        <h2>До 3 устройств <br /> на одном аккаунте</h2>
                        <p>подключите все свои устройства <br /> и смотрите там, где удобно </p>
                    </div>
                </div>
            </section>
            <aside>
                <div className="aside-container">
                    <div className="aside-item">
                        <h2>Смотрите где угодно</h2>
                        <p> Смотрите фильмы и сериалы на телефоне,<br /> планшете, ноутбуке без ограничений и без<br />
                            дополнительной платы.
                        </p>
                        <button className="wrapper__button"
                            style={{ marginTop: "36px", marginBottom: 0, marginLeft: "100px" }}>Попробовать 14 дней
                            бесплатно</button>
                    </div>
                    <div className="aside-item"></div>
                </div>
            </aside >
        </>
    )
}
