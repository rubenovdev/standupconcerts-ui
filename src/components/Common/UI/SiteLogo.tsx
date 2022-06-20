import React from 'react'
import { Link } from 'react-router-dom'
const iconSite = require("../../../assets/img/iconSite.png")

export const SiteLogo = () => {
    return (
        <div className="header__logo">
            <Link to="/">
                <img src={iconSite} alt="" />
            </Link>
        </div>
    )
}
