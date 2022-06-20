export const CabinetUserProfile = () => {
    return (
        <div className="cabinet__login logPadLeft">
            <h2>Профиль</h2>
            <p className="cabinetLoginTxt">ДАННЫЕ АККАУНТА</p>
            <div className="info infoProf">
                <p>E-mail</p>
                <h4>ivan-ivanov@mail.ru</h4>
                <p>Изменить e-mail</p>
            </div>
            <div className="info infoProf">
                <p>Пароль</p>
                <h4>••••••••••</h4>
                <p>Изменить пароль</p>
            </div>
            <div className="for__btn">
                <button>Выйти</button>
            </div>
        </div>
    )
}
