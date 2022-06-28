import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootStateType } from '../../../../store/rootReducer'

const archiveIcon = require("../../../../assets/img/arxiv.png")

export const CabinetUserFavoriteComedians = () => {
    const user = useSelector((user: RootStateType) => user.accountReducer.user)

    return (
        <div className="cabinet__login">
            <h2>Любимые комики</h2>
            <p className="txt1">Список любимых комиков</p>
            {
                user?.favoriteComedians.length ||
                <>
                    <div className="info2">
                        <img src={archiveIcon} alt="" />
                        <p>Сохраняйте любимых комиков — они появятся здесь</p>

                    </div>
                    <Link className="goToCat" to="/catalog">Перейти в каталог</Link>
                </>
            }
            <div className="infoPar">

                {
                    user?.favoriteComedians.map(comedian => (
                        <Link to={`/comedians/${comedian.id}`}>
                            <div className="info1" style={{
                                backgroundImage: `url(${process.env.REACT_APP_STORAGE}/${comedian.imgUrl})`
                            }}>
                            </div>
                            <p className="cabTxt1">{comedian.name}</p>
                            <p className="cabTxt2"><Link to={`/comedians/${comedian.id}`} style={{ color: "white" }}>Смотреть все выступления</Link></p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
