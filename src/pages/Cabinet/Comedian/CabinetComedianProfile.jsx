import React from 'react'

export const CabinetComedianProfile = () => {
    return (
        <div className="cabinet__login1">
            <h2>Профиль комика</h2>
            <p>ДАННЫЕ АККАУНТА</p>
            <div className="informationPar">
                <div className="photo">
                    <img src="./img/cabinetphoto.png" alt="" />
                    <button>Изменить фото</button>
                </div>
                <div className="mainInfo">
                    <div className="cabinetInfo">
                        <span className="CabinetInfoTxt1">Имя</span>
                        <span className="CabinetInfoTxt2">Иван Иванов</span>
                        <span className="CabinetInfoTxt3">Изменить <span className="Dnonetxt"> имя </span></span>
                    </div>
                    <div className="cabinetInfo">
                        <span className="CabinetInfoTxt1">E-mail</span>
                        <span className="CabinetInfoTxt2">ivan-ivanov@mail.ru</span>
                        <span className="CabinetInfoTxt3">Изменить <span className="Dnonetxt"> e-mail </span></span>
                    </div>
                    <div className="cabinetInfo">
                        <span className="CabinetInfoTxt1">Пароль</span>
                        <span className="CabinetInfoTxt2">••••••••••</span>
                        <span className="CabinetInfoTxt3">Изменить <span className="Dnonetxt"> пароль </span></span>
                    </div>
                    <div className="cabinetInfo lst">
                        <span className="CabinetInfoTxt1">О себе</span>
                        <span className="CabinetInfoTxt2">Напишите короткое описание о себе</span>
                        <span className="CabinetInfoTxt3">Изменить <span className="Dnonetxt">описание</span> </span>
                    </div>
                    <a className="goToCat" href="./catalog.html">Выйти из аккаунта</a>
                </div>
            </div>
        </div>
    )
}
