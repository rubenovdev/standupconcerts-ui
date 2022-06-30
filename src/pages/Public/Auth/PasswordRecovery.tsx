import { Form, Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { CloseBtn } from '../../../components/Common/UI/CloseBtn';
import { passwordRecovery, passwordRecoveryActions } from '../../../store/auth/passwordRecovery/actions';
import { RootStateType } from '../../../store/rootReducer';

export const PasswordRecovery = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSent = useSelector((state: RootStateType) => state.authReducer.passwordRecoveryReducer.isSent)

  return (
    <div className="resetpass" style={{ transform: "scale(1)" }}>
      <Helmet>
        <title>Восстановление пароля</title>
      </Helmet>
      {!isSent ?
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => dispatch<any>(passwordRecovery(values.email))}
        >
          {
            ({ values, handleChange, submitForm }) => (
              <Form className="resetpassword" onSubmit={(e) => {
                e.preventDefault()
                submitForm()
              }}>
                <h2>Забыли пароль?</h2>
                <p >Пажалуйста, укажите e-mail, который <br /> вы испоьзовали при регистрации</p>
                <input name="email" value={values.email} onChange={handleChange} type="email" style={{ background: "#212121" }} placeholder="E-mail" />
                <button type="submit" className="wrapper__button" style={{ marginTop: "12px", width: "288px", marginBottom: 0 }}>Сбросить
                  пароль</button>
                <CloseBtn classes='close' onClose={() => {
                  navigate("/login")
                  dispatch(passwordRecoveryActions.setIsSent(false))
                }} />
              </Form>
            )}
        </Formik>
        :
        <div className="emailmess">
          На ваш email отправлено <br /> письмо с инструкциями
          <CloseBtn classes='close' onClose={() => {
            navigate("/login")
            dispatch(passwordRecoveryActions.setIsSent(false))
          }} />
        </div>
      }
    </div >)
}
