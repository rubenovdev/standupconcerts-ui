import { Form, Formik } from 'formik'
import React from 'react'
import { ConcertType } from '../../../types/concerts'
import { CloseBtn } from '../../Common/UI/CloseBtn'

type Props = {
    active: boolean
    setActive: (active: boolean) => void
    onChange: (values: Partial<ConcertType>) => void
    concert: ConcertType
}

export const ModalUpdateVideo: React.FC<Props> = ({ active, setActive, onChange, concert }) => {
    const handleOnChange = (values: Partial<ConcertType>) => {
        onChange(values)
        setActive(false)
    }

    return (
        active ?
            <div className="par parmargin parwidth loadpar modal">
                <div className="PaddingX">
                    <CloseBtn onClose={() => {
                        setActive(false)
                    }} />                </div>
                <div className="mainLoad">
                    <p className='ParTxt1 linkVideo' style={{ fontFamily: 'gilroyultra', marginBottom: "20px" }}>Изменить</p>
                    <p className="ParTxt1 linkVideo" style={{
                        padding: "27px 0 14px", fontFamily: 'gilroyultra'
                    }}>Название (обязательное поле)</p>
                    <Formik initialValues={{
                        title: concert.title,
                        description: concert.description
                    }}
                        onSubmit={handleOnChange}>
                        {

                            ({ values, submitForm, handleChange }) => (
                                <Form>
                                    <input type="text" placeholder="Добавьте название" name="title" value={values.title} onChange={handleChange} />
                                    <p style={{ padding: "14px 0", fontFamily: 'gilroyultra' }} className="ParTxt1 linkVideo">Описание</p>
                                    <input type="text" className="textArea" placeholder="Добавьте описание" value={values.description} onChange={handleChange} name="description" />
                                    <button className="parButton parbtn" style={{ marginTop: "14px" }} onClick={submitForm}>Сохранить</button>
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
