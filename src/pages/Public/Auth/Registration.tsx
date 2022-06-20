import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../../store/auth/registration/actions';
import { SignUpDtoType } from '../../../types/API/auth';

export const Registration = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: SignUpDtoType) => {
      dispatch<any>(registration(values))
    },
  });

  return (
    <div className="register">
      <h2>Регистрация</h2>
      <p className="ResetMinTxt">Зарегистрируйтесь для просмотра и загрузки стендап выступлений</p>

      <form onSubmit={formik.handleSubmit}>
        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="E-mail или телефон" />
        <div className="input">
          <input type="password" id="pass" placeholder="Пароль" name="password" value={formik.values.password} onChange={formik.handleChange} required minLength={6} style={{ marginTop: "18px", marginBottom: "8px" }} />
          <img src="img/eye.png" alt="" id="eye" />
        </div>
        <div className="max">
          <p style={{ paddingRight: "130px" }}>Не менее 6 символов</p>
        </div>
        <div className="allow">
          <input id="check" type="checkbox" />
          <p>Я соглпсен с условями <a href="#">пользовательского <br /> соглашения</a>
            и даю свое <a href="#">
              согласие на обработку <br /> моих персональных данных
            </a>
          </p>
        </div>
        <button className="wrapper__button" style={{ margin: "20px 0 22px" }}>Зарегистрироваться</button>
        <p className="notAc opacNotAc">Уже зарегистрированы? <Link to="/login" style={{ color: "#FF6A63" }} > Войдите в аккаунт</Link></p>
      </form>
    </div>
  )
}
