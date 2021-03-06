import { Formik } from 'formik'
import React from 'react'
import { CloseBtn } from '../../Common/UI/CloseBtn'

type Props = {
    active: boolean,
    setActive: (active: boolean) => void,
    fileUpload: (link: string) => void,
}

export const ModalUploadVideoYoutube: React.FC<Props> = ({ setActive, fileUpload, active }) => {
    return (
        active ?

            < div className="par parmargin parwidth modal">
                <div className="PaddingX">
                    <CloseBtn onClose={() => {
                        setActive(false)
                    }} />                </div>
                <p className="ParTxt1 linkVideo" style={{ fontFamily: "gilroyultra" }}>Ссылка на видео</p>
                <Formik
                    initialValues={{
                        link: ""
                    }}
                    onSubmit={(values) => fileUpload(values.link)}
                >
                    {
                        ({ values, handleChange, submitForm }) => {
                            return (
                                <>
                                    <input type="text" onChange={handleChange} name="link" value={values.link} className="parInput" />
                                    <p className="ParTxt2 nowidth">Вы можете указать ссылку YouTube</p>
                                    <button className="parButton parbtn" onClick={submitForm}>Загрузить</button>
                                </>
                            )
                        }
                    }
                </Formik>
            </div >
            :
            <></>
    )
}
