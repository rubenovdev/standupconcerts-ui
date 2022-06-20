import React from 'react'
import { Link } from 'react-router-dom'
import { SiteLogo } from './UI/SiteLogo'
const iconSite = require("../../assets/img/iconSite.png")
const iconVk = require("../../assets/img/vk.png")

export const CommonFooter = () => {
    return (
        <footer>
            <div className="footer__container">
                <SiteLogo />
                <ul className="nav">
                    <li><Link to="/" >Главная</Link></li>
                    <li><a href="catalog.html">Каталог</a></li>
                    <li><a href="#">Коллекции</a></li>
                </ul>
                <a href="#">
                    <div className="vk">
                        <img src={iconVk} alt="" />
                    </div>
                </a>
            </div>
        </footer>
    )
}
