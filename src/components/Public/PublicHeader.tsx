import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootStateType } from '../../store/rootReducer'
import { sidepanelActions } from '../../store/sidepanel/actions'
const iconSite = require("../../assets/img/iconSite.png")
const iconBurgerRect1 = require("../../assets/img/rect1.png")
const iconBurgerRect2 = require("../../assets/img/rect2.png")
const iconBurgerRect3 = require("../../assets/img/rect3.png")


export const PublicHeader: React.FC = () => {
    const dispatch = useDispatch()
    const { isOpened } = useSelector((state: RootStateType) => state.sidepanelReducer)

    return (
        <header>
            <div className="header__logo">
                <Link to="/">
                    <img src={iconSite} alt="" />
                </Link>
            </div>
            <ul className="nav">
                <li><Link className="willnone" to="/">Главная</Link></li>
                <li><a className="willnone" href="./catalog.html">Каталог</a></li>
                <li><a className="willnone" href="#">Коллекции</a></li>
                <li className='searchdrop'>
                    <img src="img/search.png" className="whiteimg" alt="" />
                    <img src="./img/searchred.png" className="redimg" alt="" />
                    <input type="search" className="className" placeholder="Поиск" />
                </li>
            </ul>
            <Link to="/login" className="go">Войти</Link>
            <div className="burger" onClick={() => dispatch(sidepanelActions.setIsOpened(!isOpened))}>
                <img src={iconBurgerRect1} alt="" />
                <img src={iconBurgerRect2} alt="" />
                <img src={iconBurgerRect3} alt="" />
            </div>
        </header>
    )
}
