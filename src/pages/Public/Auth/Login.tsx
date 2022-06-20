import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../../store/auth/login/actions';

export const Login = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch<any>(login(values))
    },
  });

  return (
    <div className="register">
      <h2>Вход в аккаунт</h2>
      <p className="ResetMinTxt">Войдите для просмотра и загрузки любимых стендап выступлений</p>

      <form onSubmit={formik.handleSubmit}>
        <input name="email" value={formik.values.email} onChange={formik.handleChange} type="email" placeholder="E-mail или телефон" />
        <div className="input">
          <input type="password" onChange={formik.handleChange} value={formik.values.password} name="password" placeholder="Пароль" minLength={6}
            style={{ marginTop: "18px", marginBottom: "18px" }} id="pass" />
          <img src="img/eye.png" alt="" id="eye" />
        </div>
        <Link to='/password-recovery' className="forgotStand" id="remember">Забыли пароль?</Link>
        <button type='submit' className="wrapper__button" style={{ margin: "10px 0 21px" }}>Войти</button>
        <p className="registerStand2">Или войдите с помощью социальных сетей</p>
        <div className="social">
          <a href="#">
            <div className="vk">
              <img src="img/vk.png" alt="" />
            </div>
          </a>
          <a href="#">
            <div className="vk">
              <img src="img/yandex.png" alt="" />
            </div>
          </a>
          <a href="#">
            <div className="vk">
              <img src="img/google.png" alt="" />
            </div>
          </a>
        </div>
        <p className="notAc" style={{ marginTop: "22px" }}>Ещё нет аккаунта? <Link to="/registration"
          style={{ color: "#FF6A63" }} >Зарегистрируйтесь!</Link></p>
      </form>
    </div>
  )
}
