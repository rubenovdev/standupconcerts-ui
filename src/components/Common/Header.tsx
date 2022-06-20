import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { RootStateType } from '../../store/rootReducer'
import { Burger } from './UI/Burger'
import { SiteLogo } from './UI/SiteLogo'

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
                    <img src="img/search.png" className="whiteimg" alt="" />
                    <img src="./img/searchred.png" className="redimg" alt="" />
                    <input type="search" className="className" placeholder="Поиск" />
                </li>
            </ul>
            {!user ?
                <Link to="/login" className="go">Войти</Link>
                :
                <>
                    <Link to="/cabinet" className="myCabinet"><span>Личный кабинет</span> <img className="DnoneImg"
                        src="./img/lichni.png" /></Link>
                    <Burger />
                </>
            }

        </header>
    )
}
