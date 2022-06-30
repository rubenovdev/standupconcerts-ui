import classNames from 'classnames'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { ConcertBlock } from '../../../components/Common/ConcertBlock'
import { useQuery } from '../../../hooks/query'
import { fetchComedians } from '../../../store/comedians/actions'
import { concertsActions, fetchConcerts } from '../../../store/concerts/actions'
import { RootStateType } from '../../../store/rootReducer'

export const Concerts = () => {
    const dispatch = useDispatch()
    const concerts = useSelector((state: RootStateType) => state.concertsReducer.concerts)
    const comedians = useSelector((state: RootStateType) => state.comediansReducer.comedians)
    const filters = useSelector((state: RootStateType) => state.concertsReducer.filtersConcerts)

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch<any>(fetchConcerts())
        dispatch<any>(fetchComedians())
    }, [filters.comedianId, filters.sortBy, filters.year])

    useEffect(() => {
        
        const comedianId = searchParams.get("comedian_id")
        const year = searchParams.get("year")
        const sortBy = searchParams.get("sort_by")

        if (comedianId) {
            dispatch(concertsActions.setFiltersConcertsComedianId(comedianId))
        }

        if (year) {
            dispatch(concertsActions.setFiltersConcertsYear(year))
        }

        if (sortBy) {
            dispatch(concertsActions.setFiltersConcertsSortBy(sortBy))
        } else {
            handlerChangeSortBy("new")
        }

    }, [])

    const handlerChangeFiltersComedianId = (comedianId: string) => {
        dispatch(concertsActions.setFiltersConcertsComedianId(comedianId))
        if (comedianId) {
            searchParams.set("comedian_id", comedianId)
        } else {
            searchParams.delete("comedian_id")
        }
        setSearchParams(searchParams)

    }

    const handlerChangeFiltersYear = (year: string) => {

        dispatch(concertsActions.setFiltersConcertsYear(year))
        if (year) {
            searchParams.set("year", year)
        } else {
            searchParams.delete("year")
        }
        setSearchParams(searchParams)

    }

    const handlerChangeSortBy = (sortBy: string) => {
        dispatch(concertsActions.setFiltersConcertsSortBy(sortBy))

        if (sortBy) {
            searchParams.set("sort_by", sortBy)
        } else {
            searchParams.delete("sort_by")
        }
        setSearchParams(searchParams)

    }

    return (
        <section id="sec1">
            <Helmet>
                <title>Каталог</title>
            </Helmet>
            <div className="container">
                <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Каталог</span></p>
                <p className="sec1Txt2">Стендап выступлений</p>
                <div className="allControlsPar">
                    <div className="controlsPar">
                        <div className="controls">
                            <div className="firstPar">
                                <p className="controlstxt">Все выступления</p>
                                <img className="imgButton" width="100%" alt="" />
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
                                <img className="imgButton" width="100%" alt="" />
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
                        <div className="controls">
                            <div className="firstPar">
                                <select value={filters.comedianId} onChange={e => handlerChangeFiltersComedianId(e.target.value)} className="controlstxt">
                                    <option value="">Выберите комика</option>
                                    {comedians.map(comedian => <option key={comedian.id} value={comedian.id}>{comedian.name}</option>)}
                                </select>
                                <img className="imgButton" width="100%" alt="" />
                            </div>
                            <div className="burgerControls">
                                <ul className="burgerControlsTxtPar">
                                    <li className="burgerControlsTxt">Иван Иванов</li>
                                    <li className="burgerControlsTxt">Алексей Иванов </li>
                                    <li className="burgerControlsTxt">Максим Иванов</li>
                                    <li className="burgerControlsTxt">Михаил Иванов</li>
                                </ul>
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


                <div className="elementsPar">
                    {
                        concerts.map(concert => {
                            return (
                                <ConcertBlock concert={concert} />
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}
