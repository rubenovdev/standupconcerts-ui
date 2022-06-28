import React from 'react'
import { CloseBtn } from '../../Common/UI/CloseBtn'

type Props = {
    active: boolean,
    setActive: (active: boolean) => void,
    onDelete: () => void
}

export const ModalDeleteVideo: React.FC<Props> = ({ active, setActive, onDelete }) => {
    return (

        active ?
            < div className="par parmargin modal">
                <div className="PaddingX">
                    <CloseBtn onClose={() => {
                        setActive(false)
                    }}/>
                </div>
                <p className="ParTxt1">Удалить видео?</p>
                <p className="ParTxt2 parCheck" style={{ padding: "14px 0 22px" }}><input type="checkbox" />Я понимаю, что отменить <br /> это действие нельзя</p>
                <button onClick={() => {
                    onDelete()
                    setActive(false)
                }} className="parButton">Удалить видео</button>
            </div >
            :
            null
    )
}
