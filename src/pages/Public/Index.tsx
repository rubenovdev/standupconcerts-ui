import React from 'react'
import { Link } from 'react-router-dom'
const firstHand = require("../../assets/img/hand1.png")
const secondHand = require("../../assets/img/hand2.png")
const thirdHand = require("../../assets/img/hand3.png")


export const Index = () => {
    return (
        <>
            <div className="wrapper__content">
                <h2 style={{ marginTop: "94px" }}>Смотрте <span>стендап</span> <br /> <span>Выступления</span> от любимых <br />
                    комиков по подписке</h2>
                <p>Отменить подписку можно в любое время</p>
                <div className="wrapper__rect">
                    <img src="img/rect3.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/rect4.png" alt="" />
                    <img src="img/Line.png" alt="" />
                    <img src="img/rect5.png" alt="" />
                    <img src="img/rect6.png" alt="" />
                    <img src="img/rect7.png" alt="" />
                    <img src="img/rect8.png" alt="" />
                </div>
                <p style={{ marginTop: "27px", marginBottom: "55px" }}>Напишем на почту за 4 дня</p>
                <button className="wrapper__button">попробовать 14 дней бесплатно</button>
                <a className="seeMore" href="#indexSec">Узнайте подробнее</a>
                <img src="img/arrow.png" alt="" style={{ display: "block", margin: "auto", cursor: "pointer" }} />
            </div>
            <main>
                <h2>Выбирайте и смотрите любимые <br /> <span>стендап выступления</span></h2>
                <div className="main-items">
                    <div className="main-item"><img src="img/person1.png" alt="person" />
                        <p>Хороший год</p>
                    </div>
                </div>


                <button className="wrapper__button">Попробовать 14 дней бесплатно</button>
            </main>
            <section id="indexSec">
                <h2>Смотрите без рекламы <br /><span>в отличном качестве</span></h2>

                <div className="section-items">
                    <div className="section-item">
                        <div className="section__div">
                            <img src={thirdHand} alt="" />
                        </div>

                        <h2>Загружайте сериалы <br /> для просмотра офлайн</h2>
                        <p>сохраняйте видео в избранном, <br /> и у вас всегда будет, что посмотреть.</p>
                    </div>
                    <div className="section-item">
                        <div className="section__div">

                            <img src={secondHand} alt="/" />
                        </div>
                        <h2>Встроенные профили <br /> для разных пользователей</h2>
                        <p>для друзей или семьи -- смотрите стендап <br /> и выступления,разделяя один аккаунт</p>
                    </div>
                    <div className="section-item">
                        <div className="section__div">
                            <img src={firstHand} alt="" />
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
