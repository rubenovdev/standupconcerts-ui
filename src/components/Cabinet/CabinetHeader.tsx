import React from 'react'

export const CabinetHeader: React.FC = () => {
    return (
        <div className="wrapper wrapper1">
            <header>
                <div className="header__logo">
                    <a href="index.html">
                        <img src="./img/iconSite.png" alt="" />
                    </a>
                </div>
                <ul className="nav">
                    <li className="willnone"><a href="./index.html">Главная</a></li>
                    <li className="willnone"><a href="./catalog.html">Каталог</a></li>
                    <li className="willnone"><a href="#">Коллекции</a></li>
                    <li className='searchdrop'>
                        <img src="img/search.png" className="whiteimg" alt="" />
                        <img src="./img/searchred.png" className="redimg" alt="" />
                        <input type="search" className="className" placeholder="Поиск" />
                    </li>
                </ul>
                <a href="#" className="myCabinet"><span>Личный кабинет</span> <img className="DnoneImg"
                    src="./img/lichni.png" /></a>
                <div className="burger">
                    <img src="img/rect1.png" alt="" />
                    <img src="img/rect1.png" alt="" />
                    <img src="img/rect2.png" alt="" />
                </div>
            </header>
        </div>
    )
}
