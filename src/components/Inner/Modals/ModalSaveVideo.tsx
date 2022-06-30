import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { concertsActions } from '../../../store/concerts/actions'
import { RootStateType } from '../../../store/rootReducer'
import { CreateConcertDto } from '../../../types/API/concerts'
import { CloseBtn } from '../../Common/UI/CloseBtn'

type Props = {
    active: boolean,
    setActive: (active: boolean) => void,
    onSubmit: (values: Partial<CreateConcertDto>) => void
}

export const ModalSaveVideo: React.FC<Props> = ({ active, onSubmit, setActive }) => {
    const submitHandler = (values: Partial<CreateConcertDto>) => {
        onSubmit(values)
    }
    const dispatch = useDispatch()

    const progress = useSelector((state: RootStateType) => state.concertsReducer.progressUploadConcert)

    useEffect(() => {
        if (progress == 100) {
            setTimeout(() => {
                setActive(false)
                dispatch(concertsActions.setProgressUploadConcert(null))
            }, 100)
        }
    }, [progress])

    return (
        active ?
            <div className="par parmargin parwidth loadpar modal">
                <div className="PaddingX">
                    <CloseBtn onClose={() => {
                        setActive(false)
                    }} />                </div>
                <div className="mainLoad">
                    {progress &&
                        <>
                            <p className='ParTxt1 linkVideo' style={{ fontFamily: 'gilroyultra' }}>Загружено <b>{Math.ceil(progress)}%</b></p>
                            <div className="loading">
                                <div className="loadingLine" style={{ width: `${Math.ceil(progress)}%` }}></div>
                            </div>
                        </>
                    }
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
                                <Form onSubmit={e => {
                                    e.preventDefault()
                                }}>

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
