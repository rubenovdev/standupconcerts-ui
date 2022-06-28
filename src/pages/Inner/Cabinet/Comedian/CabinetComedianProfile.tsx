import { Formik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalUploadImage } from '../../../../components/Inner/Modals/ModalUploadImage'
import { logout, updateCurrentUser, updateCurrentUserImage, updateCurrentUserPassword } from '../../../../store/account/actions'
import { RootStateType } from '../../../../store/rootReducer'
import { portal } from '../../../../utils/portal'

export const CabinetComedianProfile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootStateType) => state.accountReducer.user)
    const [isModalActive, setIsModalActive] = useState<boolean>(false)

    return (
        <>
            <div className="cabinet__login1">
                <h2>Профиль комика</h2>
                <p>ДАННЫЕ АККАУНТА</p>
                <div className="informationPar">
                    <div className="photo">
                        <img src={`${process.env.REACT_APP_STORAGE}/${user?.imgUrl}`} alt="" />
                        <button onClick={() => setIsModalActive(true)}>Изменить фото</button>
                    </div>
                    <div className="mainInfo">
                        <Formik
                            initialValues={{
                                email: user?.email,
                                name: user?.name,
                                about: user?.about
                            }}
                            onSubmit={(values) => dispatch<any>(updateCurrentUser(values))}
                        >
                            {({ values, handleChange, submitForm }) => (
                                <>
                                    <div className="cabinetInfo">
                                        <span className="CabinetInfoTxt1">Имя</span>
                                        <input className="CabinetInfoTxt2" value={values.name} onChange={handleChange} name="name" />
                                        <span onClick={submitForm} className="CabinetInfoTxt3">Изменить <span className="Dnonetxt"> имя </span></span>
                                    </div>
                                    <div className="cabinetInfo">
                                        <span className="CabinetInfoTxt1">E-mail</span>
                                        <input className="CabinetInfoTxt2" value={values.email} onChange={handleChange} name="email" />
                                        <span onClick={submitForm} className="CabinetInfoTxt3">Изменить <span className="Dnonetxt"> e-mail </span></span>
                                    </div>
                                    <div className="cabinetInfo lst">
                                        <span className="CabinetInfoTxt1">О себе</span>
                                        <input className="CabinetInfoTxt2" value={values.about} onChange={handleChange} name="about" />
                                        <span onClick={submitForm} className="CabinetInfoTxt3">Изменить <span className="Dnonetxt">описание</span> </span>
                                    </div>
                                </>
                            )}
                        </Formik>
                        <Formik
                            initialValues={{
                                password: ""
                            }}
                            onSubmit={(values) => dispatch<any>(updateCurrentUserPassword(values.password))}
                        >
                            {
                                ({ values, submitForm, handleChange }) => (
                                    <div className="cabinetInfo">
                                        <span className="CabinetInfoTxt1">Пароль</span>
                                        <input type="password" className="CabinetInfoTxt2" value={values.password} name="password" onChange={handleChange} />
                                        <span onClick={submitForm} className="CabinetInfoTxt3">Изменить <span className="Dnonetxt"> пароль </span></span>
                                    </div>
                                )
                            }
                        </Formik>
                        <button className="goToCat" onClick={() => dispatch<any>(logout())
                        }>Выйти из аккаунта</button>
                    </div>
                </div>
            </div >
            {portal(<ModalUploadImage active={isModalActive} setActive={setIsModalActive} fileUpload={(file) => dispatch<any>(updateCurrentUserImage(file))} />)}
        </>
    )
}
