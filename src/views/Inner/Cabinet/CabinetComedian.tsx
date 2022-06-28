import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export const CabinetComedianView = () => {
    return (
        <section id="Cabsec1">
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <div className="containerAdds">
                <div className="cabinetPar">

                    <div className="cabinetmain flexStart">
                        <div className="cabinet3">
                            <div className="cabinet__content">
                                <p className="sec1Txt1">Stand Up Concerts/<span className="sec1Txt1_1">Комики</span></p>
                                <h2>Личный кабинет <br />комика</h2>
                                <ul className="cabinet__nav">
                                    <li><NavLink end to="/cabinet">Профиль</NavLink></li>
                                    <li><NavLink to="/cabinet/videos">Записи моих концертов</NavLink></li>
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
