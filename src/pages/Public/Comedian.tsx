import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchComedian } from '../../store/comedians/actions'
import { RootStateType } from '../../store/rootReducer'

export const Comedian = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) {
            return
        }

        dispatch<any>(fetchComedian(+id))
    }, [])

    const currentComedian = useSelector((state: RootStateType) => state.comediansReducer.currentComedian)

    return (
        <section id="Comicsec1">
            <div className="container">
                <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Комики</span></p>
                <div className="main">
                    <div className="goBackDiv">
                        <img src="./img/goback.png" alt="" />
                        <span>Назад</span>
                    </div>
                    <p className="contentName_1">{currentComedian?.name}</p>
                    <div className="ComicPhotoDiv">
                        <img src={"http://localhost:8080/" + currentComedian?.imgUrl} alt="" />
                    </div>
                    <div className="aboutComic">
                        <div className="contentDiv">
                            <p className="contentName">{currentComedian?.name}</p>
                            <p className="ComicAboutTxt3">описание</p>
                            <p className="ComicAboutTxt4">{
                                currentComedian?.about
                            }
                            </p>

                            <div className="mainButsPar">
                                <button className="mainButs">
                                    <img src="./img/izbrannoe.png" alt="" />
                                    <p>Добавить в избранные</p>
                                </button>
                                <button className="mainButs">
                                    <img src="./img/like.png" alt="" />
                                    <p>Ещё не сделали лайки(</p>
                                </button>
                                <button className="mainButs">
                                    <img src="./img/dislike.png" alt="" />
                                    <p>Не нравится</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="main2">
                <div className="container">
                    <p className="main2Txt">Все выступления</p>
                    <div className="allControlsPar">
                        <div className="controlsPar" style={{ justifyContent: "flex-start", rowGap: "10px" }}>
                            <div className="controls">
                                <div className="firstPar">
                                    <p className="controlstxt">Все выступления</p>
                                    <img className="imgButton" src="./img/arrowDown.png" alt="" />
                                </div>
                                <div className="burgerControls">
                                    <ul className="burgerControlsTxtPar">
                                        <li className="burgerControlsTxt">Все выступления</li>
                                        <li className="burgerControlsTxt">Опция 1 </li>
                                        <li className="burgerControlsTxt">Опция 2</li>
                                        <li className="burgerControlsTxt">Опция 3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="controls">
                                <div className="firstPar">
                                    <p className="controlstxt">2022</p>
                                    <img className="imgButton" src="./img/arrowDown.png" alt="" />
                                </div>
                                <div className="burgerControls">
                                    <ul className="burgerControlsTxtPar">
                                        <li className="burgerControlsTxt">2022</li>
                                        <li className="burgerControlsTxt">2021 </li>
                                        <li className="burgerControlsTxt">2020</li>
                                        <li className="burgerControlsTxt">2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bigPar">
                            <div className="controls2Par">
                                <div className="controls2_1">
                                    <p>По новизне</p>
                                </div>
                                <div className="controls2_2">
                                    <p>Популярное</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div style={{ paddingBottom: "107px" }} className="elementsPar">

                    <a href="./catalogOpen.html">

                        <div className="elements">
                            <img src="./img/CatalogPhoto.png" alt="" />
                            <p className="elBigTxt">Название выступления...</p>
                            <div className="elSmallTxtPar">
                                <span>2019</span>
                                <span>Иван Иванов</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
