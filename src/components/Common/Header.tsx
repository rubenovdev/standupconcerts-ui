import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { RootStateType } from '../../store/rootReducer'
import { Burger } from './UI/Burger'
import { SiteLogo } from './UI/SiteLogo'

const iconSearch = require("../../assets/img/search.png")
const iconSearched = require("../../assets/img/searchred.png")
const iconPrivate = require("../../assets/img/lichni.png")

export const CommonHeader: React.FC = () => {
    const user = useSelector((state: RootStateType) => state.accountReducer.user)

    return (
        <header className='header'>
            <SiteLogo />
            <ul className="nav">
                <li className="willnone"><NavLink to="/">Главная</NavLink></li>
                <li className="willnone"><NavLink to="/catalog">Каталог</NavLink></li>
                <li className="willnone"><a href="#">Коллекции</a></li>
                <li className='searchdrop'>
                    <img src={iconSearch} className="whiteimg" alt="" />
                    <img src={iconSearched} className="redimg" alt="" />
                    <input type="search" className="className" placeholder="Поиск" />
                </li>
            </ul>
            {!user ?
                <Link to="/login" className="go">Войти</Link>
                :
                <>
                    <Link to="/cabinet" className="myCabinet"><span>Личный кабинет</span> <img className="DnoneImg"
                        src={iconPrivate} /></Link>
                    <Burger />
                </>
            }

        </header>
    )
}
