import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../../store/auth/registration/actions';
import { SignUpDtoType } from '../../../types/API/auth';
import * as Yup from 'yup';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
const eyeIcon = require("../../../assets/img/eye.png")

export const Registration = () => {
  const dispatch = useDispatch()
  const [inputPasswordType, setInputPasswordType] = useState<"password" | "text">("password")

  return (
    <div className="register">
      <Helmet>
        <title>Регистрация</title>
      </Helmet>
      <h2>Регистрация</h2>
      <p className="ResetMinTxt">Зарегистрируйтесь для просмотра и загрузки стендап выступлений</p>

      <Formik
        initialValues={{
          email: '',
          password: '',
          acceptTerms: false
        }}
        onSubmit={(values: SignUpDtoType) => {
          dispatch<any>(registration(values))
        }}
        validationSchema={Yup.object().shape({
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
          password: Yup.string().min(6, 'Accept Terms & Conditions is required')
        })}
      >
        {({ values, submitForm, handleChange }) => (
          <Form onSubmit={e => {
            e.preventDefault()
            submitForm()
          }}>
            <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="E-mail или телефон" />
            <div className="input">
              <input type={inputPasswordType} id="pass" placeholder="Пароль" name="password" value={values.password} onChange={handleChange} required minLength={6} style={{ marginTop: "18px", marginBottom: "8px" }} />
              <img src={eyeIcon} onClick={() => {
                if (inputPasswordType == "password") {
                  setInputPasswordType("text")
                } else {
                  setInputPasswordType("password")
                }
              }} alt="" id="eye" />            </div>
            <div className="max">
              <p style={{ paddingRight: "130px" }}>Не менее 6 символов</p>
            </div>
            <div className="allow">
              <input value={values.acceptTerms ? "on" : ""} onChange={handleChange} name="acceptTerms" id="check" type="checkbox" />
              <p>Я соглпсен с условями <a href="#">пользовательского <br /> соглашения</a>
                и даю свое <a href="#">
                  согласие на обработку <br /> моих персональных данных
                </a>
              </p>
            </div>
            <button className="wrapper__button" style={{ margin: "20px 0 22px" }}>Зарегистрироваться</button>
            <p className="notAc opacNotAc">Уже зарегистрированы? <Link to="/login" style={{ color: "#FF6A63" }} > Войдите в аккаунт</Link></p>
          </Form>
        )}
      </Formik>
    </div >
  )
}
