import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { googleAuth, login, vkRedirect, yandexRedirect } from '../../../store/auth/login/actions';

const vkIcon = require("../../../assets/img/vk.png")
const googleIcon = require("../../../assets/img/google.png")
const yandexIcon = require("../../../assets/img/yandex.png")
const eyeIcon = require("../../../assets/img/eye.png")

export const Login = () => {
  const dispatch = useDispatch()
  const [inputPasswordType, setInputPasswordType] = useState<"password" | "text">("password")

  return (
    <div className="register">
      <Helmet>
        <title>Вход в аккаунт</title>
      </Helmet>
      <h2>Вход в аккаунт</h2>
      <p className="ResetMinTxt">Войдите для просмотра и загрузки любимых стендап выступлений</p>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => dispatch<any>(login(values))}
      >
        {({ values, handleChange, submitForm }) => (
          <Form onSubmit={(e) => {
            e.preventDefault()
            submitForm()
          }}>
            <input name="email" value={values.email} onChange={handleChange} type="email" placeholder="E-mail или телефон" />
            <div className="input">
              <input type={inputPasswordType} onChange={handleChange} value={values.password} name="password" placeholder="Пароль" minLength={6}
                style={{ marginTop: "18px", marginBottom: "18px" }} id="pass" />
              <img src={eyeIcon} onClick={() => {
                if (inputPasswordType == "password") {                  
                  setInputPasswordType("text")
                } else {
                  setInputPasswordType("password")
                }
              }} alt="" id="eye" />
            </div>
            <Link to='/password-recovery' className="forgotStand" id="remember">Забыли пароль?</Link>
            <button type='submit' className="wrapper__button" style={{ margin: "10px 0 21px" }}>Войти</button>
            <p className="registerStand2">Или войдите с помощью социальных сетей</p>
            <div className="social">
              <a href="#">
                <div className="vk" onClick={() => {
                  dispatch<any>(vkRedirect())
                }}>
                  <img src={vkIcon} alt="" />
                </div>
              </a>
              <a href="#">
                <div className="vk" onClick={() => {
                  dispatch<any>(yandexRedirect())
                }}>
                  <img src={yandexIcon} alt="" />
                </div>
              </a>
              <a href="#" onClick={() => {
                dispatch<any>(googleAuth())
              }}>
                <div className="vk">
                  <img src={googleIcon} alt="" />
                </div>
              </a>
            </div>
            <p className="notAc" style={{ marginTop: "22px" }}>Ещё нет аккаунта? <Link to="/registration"
              style={{ color: "#FF6A63" }} >Зарегистрируйтесь!</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  )
}
