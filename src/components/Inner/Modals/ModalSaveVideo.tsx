import { Form, Formik } from 'formik'
import React from 'react'
import { CreateConcertDto } from '../../../types/API/concerts'

type Props = {
    active: boolean,
    setActive: (active: boolean) => void,
    onSubmit: (values: Partial<CreateConcertDto>) => void
}

export const ModalSaveVideo: React.FC<Props> = ({ active, onSubmit, setActive }) => {
    const submitHandler = (values: Partial<CreateConcertDto>) => {
        onSubmit(values)
        setActive(false)
    }

    return (
        active ?
            <div className="par parmargin parwidth loadpar modal">
                <div className="PaddingX">
                    <img src="./img/x.png" alt="" />
                </div>
                <div className="mainLoad">
                    <p className='ParTxt1 linkVideo' style={{ fontFamily: 'gilroyultra' }}>Загружено <b>37%</b></p>
                    <div className="loading">
                        <div className="loadingLine"></div>
                    </div>
                    <p className="ParTxt1 linkVideo" style={{ padding: "27px 0 14px", fontFamily: 'gilroyultra' }}>Название (обязательное поле)</p>
                    <Formik
                        initialValues={{
                            title: "",
                            description: ""
                        }}
                        onSubmit={submitHandler}
                    >
                        {
                            ({ values, handleChange, submitForm }) => (
                                <Form>

                                    <input type="text" placeholder="Добавьте название" value={values.title} onChange={handleChange} name="title" />
                                    <p style={{ padding: "14px 0", fontFamily: 'gilroyultra' }} className="ParTxt1 linkVideo">Описание</p>
                                    <input type="text" className="textArea" placeholder="Добавьте описание" value={values.description} onChange={handleChange} name="description" />
                                    <button onClick={submitForm} className="parButton parbtn" style={{ marginTop: "14px" }}>Опубликовать</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div >
            </div >
            :
            <></>
    )
}
