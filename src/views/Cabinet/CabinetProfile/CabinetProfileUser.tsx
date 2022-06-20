import React from 'react'
import { Routes } from 'react-router'

export const CabinetProfileUserView = () => {
    return (
        <div className="Profilecabinetmain">
            <div className="cabinet padLeft">
                <div className="cabinet__content cabinetPadleft">
                    <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Комики</span></p>
                    <h2>Личный кабинет</h2>
                    <ul className="cabinet__nav">
                        <li><a href="#" style={{ color: "#FF6A63" }}>Профиль</a></li>
                        <li><a href="emptyAdd1.html">Подписки</a></li>
                        <li><a href="emptyAdd2.html">Избранные выступления</a></li>
                        <li><a href="emptyAdd3.html">Любимые комики</a></li>

                        <li><a href="emptyAdd4.html">Сохраненные видео</a></li>
                    </ul>
                </div>
            </div>
            <Routes>

            </Routes>
        </div>
    )
}
