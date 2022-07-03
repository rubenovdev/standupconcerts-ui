import React from 'react'
import "./style.css"

let count = 0;

export const CabinetUserSubscriptions = () => {
    return (
        <div className="cabinet__login cabinet__login_test">
            <h2>Подписки</h2>
            <p className='header'>Статус подписки</p>
            <div className='wrapSub'>
                <div>
                    <p className='textSub1'>Подписка оплачена до:</p>
                    <p className='textSub2'>15.07.2022</p>
                </div>
            </div>
            <div>
                <button className="buttonSuns">Продлить подписку</button>
                <button className="buttonSuns">Отменить подписку</button>
            </div>
        </div>)
}
