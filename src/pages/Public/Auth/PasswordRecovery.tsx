import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { passwordRecovery } from '../../../store/auth/passwordRecovery/actions';

export const PasswordRecovery = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: (values) => {
          dispatch<any>(passwordRecovery(values.email))
        },
      });

    return (
        <div className="resetpass" style={{transform: "scale(1)"}}>
            <form className="resetpassword" onSubmit={formik.handleSubmit}>
                <h2>Забыли пароль?</h2>
                <p >Пажалуйста, укажите e-mail, который <br /> вы испоьзовали при регистрации</p>
                <input name="email" value={formik.values.email} onChange={formik.handleChange}  type="email" style={{ background: "#212121" }} placeholder="E-mail" />
                <button type="submit" className="wrapper__button" style={{ marginTop: "12px", width: "288px", marginBottom: 0 }}>Сбросить
                    пароль</button>
                <img src="img/x.png" alt="close" className="close" />
            </form>
            <div className="emailmess">
                На ваш email отправлено <br /> письмо с инструкциями
                <img src="img/x.png" alt="" className="close" />
            </div>
        </div >)
}
