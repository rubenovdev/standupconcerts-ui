import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCurrentUserRoles } from '../../store/account/selectors'
import { RootStateType } from '../../store/rootReducer'
import { sidepanelActions } from '../../store/sidepanel/actions'
const iconClose = require("../../assets/img/x.png")

export const Sidepanel = () => {
    const dispatch = useDispatch()
    const roles = useSelector(selectCurrentUserRoles)


    return (
        <div className="burger__menu">
            <ul className="burger__ul">
                {
                    roles.includes("comedian") ?
                        <>
                            <li><Link to="/cabinet">Личный кабинет комика</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/cabient">Мой профиль</Link></li>
                            <li><Link to="/cabinet/subscriptions">Подписки</Link></li>
                            <li><Link to="/cabinet/favorite-concertrs">Избранные выступления</Link></li>
                            <li><Link to="/cabinet/favorite-comedians">Любимые комики</Link></li>
                        </>

                }
            </ul>
            <img onClick={() => dispatch(sidepanelActions.setIsOpened(false))} src={iconClose} className='close' />
        </div>
    )
}
