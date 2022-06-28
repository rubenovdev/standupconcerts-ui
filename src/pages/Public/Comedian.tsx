import classNames from 'classnames'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { ConcertBlock } from '../../components/Common/ConcertBlock'
import { appendFavoriteComedian, deleteFavoriteComedian } from '../../store/account/actions'
import { comediansActions, dislikeComedian, fetchComedian, fetchCurrentComedianConcerts, likeComedian } from '../../store/comedians/actions'
import { RootStateType } from '../../store/rootReducer'

const iconBack = require("../../assets/img/goback.png")
const iconLike = require("../../assets/img/like.png")
const iconDislike = require("../../assets/img/dislike.png")
const iconFavorite = require("../../assets/img/izbrannoe.png")

export const Comedian = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const filters = useSelector((state: RootStateType) => state.comediansReducer.currentComedianFilters)
    const concerts = useSelector((state: RootStateType) => state.comediansReducer.currentComedianConcerts)
    const user = useSelector((state: RootStateType) => state.accountReducer.user)

    const navigate = useNavigate()

    useEffect(() => {
        const year = searchParams.get("year")
        const sortBy = searchParams.get("sort_by")

        if (year) {
            dispatch(comediansActions.setCurrentComedianFiltersYear(year))
        }

        if (sortBy) {
            dispatch(comediansActions.setCurrentComedianFiltersSortBy(sortBy))
        } else {
            handlerChangeSortBy("new")
        }

    }, [])

    useEffect(() => {
        if (!id) {
            return
        }

        dispatch<any>(fetchComedian(+id))
    }, [id])

    useEffect(() => {
        if (!id) {
            return
        }

        dispatch<any>(fetchCurrentComedianConcerts(+id))

    }, [filters.sortBy, filters.year])


    const [searchParams, setSearchParams] = useSearchParams();

    const handlerChangeFiltersYear = (year: string) => {

        dispatch(comediansActions.setCurrentComedianFiltersYear(year))
        if (year) {
            searchParams.set("year", year)
        } else {
            searchParams.delete("year")
        }
        setSearchParams(searchParams)

    }

    const handlerChangeSortBy = (sortBy: string) => {
        dispatch(comediansActions.setCurrentComedianFiltersSortBy(sortBy))

        if (sortBy) {
            searchParams.set("sort_by", sortBy)
        } else {
            searchParams.delete("sort_by")
        }
        setSearchParams(searchParams)

    }

    const currentComedian = useSelector((state: RootStateType) => state.comediansReducer.currentComedian)

    return (
        <section id="Comicsec1">
            <Helmet>
                <title>{currentComedian?.name}</title>
            </Helmet>
            <div className="container">
                <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Комики</span></p>
                <div className="main">
                    <div onClick={() => navigate("/catalog")} className="goBackDiv">
                        <img src={iconBack} alt="" />
                        <span>Назад</span>
                    </div>
                    <p className="contentName_1">{currentComedian?.name}</p>
                    <div className="ComicPhotoDiv">
                        <img src={`${process.env.REACT_APP_STORAGE}/${currentComedian?.imgUrl}`} alt="" />
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
                                {
                                    id && user && (user?.favoriteComedians.find(comedian => comedian.id === +id) ?
                                        <button onClick={() => {
                                            id && dispatch<any>(deleteFavoriteComedian(+id))
                                        }} className="mainButs">
                                            <img src={iconFavorite} alt="" />
                                            <p>Удалить из избранных</p>
                                        </button>
                                        :

                                        <button onClick={() => {
                                            id && dispatch<any>(appendFavoriteComedian(+id))
                                        }} className="mainButs">
                                            <img src={iconFavorite} alt="" />
                                            <p>Добавить в избранные</p>
                                        </button>
                                    )}
                                <button onClick={() => id && dispatch<any>(likeComedian(+id))} className="mainButs">
                                    <img src={iconLike} alt="" />
                                    <p>{currentComedian?.likesCount}</p>
                                </button>
                                <button onClick={() => id && dispatch<any>(dislikeComedian(+id))} className="mainButs">
                                    <img src={iconDislike} alt="" />
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
                                    <img className="imgButton" alt="" />
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
                                    <select value={filters.year} onChange={e => handlerChangeFiltersYear(e.target.value)} className="controlstxt">
                                        <option value="">Выберите год</option>
                                        <option value={2022}>2022</option>
                                        <option value={2021}>2021 </option>
                                        <option value={2020}>2020</option>
                                        <option value={2019}>2019</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="bigPar">
                            <div className="controls2Par">
                                <div className={classNames({
                                    "controls2_1": filters.sortBy !== "new",
                                    "controls2_2": filters.sortBy === "new",
                                })} onClick={() => handlerChangeSortBy("new")}>
                                    <p>По новизне</p>
                                </div>
                                <div className={classNames({
                                    "controls2_1": filters.sortBy !== "popular",
                                    "controls2_2": filters.sortBy === "popular",
                                })} onClick={() => handlerChangeSortBy("popular")}>
                                    <p>Популярное</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div style={{ paddingBottom: "107px" }} className="elementsPar">

                    {
                        concerts.map(concert => {
                            return (
                                <ConcertBlock concert={concert} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
