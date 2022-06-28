import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootStateType } from '../../../../store/rootReducer'
const archiveIcon = require("../../../../assets/img/arxiv.png")

export const CabinetUserFavoriteConcerts = () => {
    const user = useSelector((user: RootStateType) => user.accountReducer.user)

    return (
        <div className="cabinet__login">
            <h2>Избранные выступления</h2>
            <p className="txt1">Список избранных выступлений</p>
            {
                user?.favoriteConcerts.length ||
                <>
                    <div className="info2">
                        <img src={archiveIcon} alt="" />
                        <p>Добавляйте стендап выступления в избранные— они появятся здесь</p>

                    </div>
                    <Link className="goToCat" to="/catalog">Перейти в каталог</Link>
                </>
            }
            <div className="infoPar">
                {
                    user?.favoriteConcerts.map(concert => (
                        <Link to={`/catalog/${concert.id}`}>
                            <div className="info1" style={{
                                backgroundImage: `url(${process.env.REACT_APP_STORAGE}/${concert.frameSrc})`
                            }}>
                            </div>
                            <p className="cabTxt1">{concert.title}</p>
                            <p className="cabTxt2">{new Date(concert.createdAt).getFullYear()}</p>

                        </Link>
                    ))
                }
            </div>

        </div>)
}
