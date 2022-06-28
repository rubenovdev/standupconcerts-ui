import React, { useRef } from 'react'
import { CloseBtn } from '../../Common/UI/CloseBtn'

type Props = {
    active: boolean,
    setActive: (active: boolean) => void,
    fileUpload: (file: File) => void,
    uploadFromYoutube: () => void
}

const iconLine1 = require("../../../assets/img/line1.png")

export const ModalUploadVideo: React.FC<Props> = ({ active, setActive, fileUpload, uploadFromYoutube }) => {
    const fileInputRef = useRef(null)


    const fileUploadHandler = (file: File) => {
        fileUpload(file)
        setActive(false)
    }

    const triggerFileInput = () => {
        if (!fileInputRef.current) {
            return
        }

        // @ts-ignore
        fileInputRef.current.click()
    }

    return (
        active ?
            <div className="par parmargin modal">
                < div className="PaddingX" >
                    <CloseBtn onClose={() => {
                        setActive(false)
                    }} />                </div >
                <p className="ParTxt1">Загрузка в мои выступления</p>
                <p className="ParTxt2" style={{ padding: "20px 0" }}>Чтобы начать загрузку, выберите файл на компьютере</p>
                <button className="parButton" style={{ backgroundColor: "#555555", padding: "11px 40px" }} onClick={uploadFromYoutube}>Добавить с YouTube</button>
                <div className="or">
                    <img src={iconLine1} alt="" />
                    <span>или</span>
                    <img src={iconLine1} alt="" />
                    <button onClick={triggerFileInput} className="parButton red">Выбрать файл</button>
                    <input type="file" ref={fileInputRef} onChange={(e) => e.target.files && fileUploadHandler(e.target.files[0])} hidden />
                </div>
            </div >
            :
            <></>
    )
}
