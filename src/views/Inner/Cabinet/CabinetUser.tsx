import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'

export const CabinetUserView = () => {
    return (
        <div className="Profilecabinetmain">
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <div className="cabinet padLeft">
                <div className="cabinet__content cabinetPadleft">
                    <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Комики</span></p>
                    <h2>Личный кабинет</h2>
                    <ul className="cabinet__nav">
                        <li><NavLink end to="/cabinet">Профиль</NavLink></li>
                        <li><NavLink to="/cabinet/subscriptions">Подписки</NavLink></li>
                        <li><NavLink to="/cabinet/favorite-concerts">Избранные выступления</NavLink></li>
                        <li><NavLink to="/cabinet/favorite-comedians">Любимые комики</NavLink></li>
                        <li><NavLink to="/cabinet/saved-videos">Сохраненные видео</NavLink></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
