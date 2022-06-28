import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { logout, updateCurrentUser, updateCurrentUserPassword } from "../../../../store/account/actions"
import { RootStateType } from "../../../../store/rootReducer"

export const CabinetUserProfile = () => {
    const user = useSelector((state: RootStateType) => state.accountReducer.user)
    const dispatch = useDispatch()

    return (
        <div className="cabinet__login logPadLeft">
            <h2>Профиль</h2>
            <p className="cabinetLoginTxt">ДАННЫЕ АККАУНТА</p>
            <Formik
                initialValues={{
                    email: user?.email,
                }}
                onSubmit={(values) => dispatch<any>(updateCurrentUser(values))}
            >
                {
                    ({ values, handleChange, submitForm }) => (

                        <div className="info infoProf">
                            <p>E-mail</p>
                            <input value={values.email} className="CabinetInfoTxt2" onChange={handleChange} name="email" />
                            <p onClick={submitForm}>Изменить e-mail</p>
                        </div>
                    )

                }
            </Formik>
            <Formik
                initialValues={{
                    password: ""
                }}
                onSubmit={(values) => dispatch<any>(updateCurrentUserPassword(values.password))}
            >
                {
                    ({ values, handleChange, submitForm }) => (
                        <div className="info infoProf">
                            <p>Пароль</p>
                            <input type="password" className="CabinetInfoTxt2" value={values.password} name="password" onChange={handleChange} />
                            <p onClick={submitForm}>Изменить пароль</p>
                        </div>
                    )

                }
            </Formik>
            <div className="for__btn">
                <button onClick={() => dispatch<any>(logout())}> Выйти</button>
            </div>
        </div >
    )
}
