import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import { CabinetComedianProfile } from '../../../pages/Cabinet/Comedian/CabinetComedianProfile'
import { CabinetComedianVideos } from '../../../pages/Cabinet/Comedian/CabinetComedianVideos'

export const CabinetProfileComedianView = () => {
    return (
        <section id="Cabsec1">
            <div className="containerAdds">
                <div className="cabinetPar">

                    <div className="cabinetmain flexStart">
                        <div className="cabinet3">
                            <div className="cabinet__content">
                                <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Комики</span></p>
                                <h2>Личный кабинет <br />комика</h2>
                                <ul className="cabinet__nav">
                                    <li><Link style={{ color: "#FF6A63" }} to="/cabinet/profile">Профиль</Link></li>
                                    <li><Link to="/cabinet/videos">Записи моих концертов</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>

            </div>
        </section>
    )
}
