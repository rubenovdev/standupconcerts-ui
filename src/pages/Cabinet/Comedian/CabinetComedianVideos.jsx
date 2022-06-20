import React from 'react'

export const CabinetComedianVideos = () => {
    return (
        <div className="cabinet__login1" style={{ width: "1044px" }}>
            <div className="videoPar">
                <h2>Записи моих концертов</h2>
                <a href="#"><img src="./img/cash.png" alt="" /> Загрузить новое видео</a>
            </div>
            <p style={{ opacity: ".5", padding: "13px 0 36px" }}>СПИСОК ВАШИХ ВЫСТУПЛЕНИЙ</p>
            <div className="video">
                <img src="./img/CatalogPhoto.png" alt="" />
                <p className="videoName">Название выступления...</p>
                <p className="videoViews">25 000 просмотров <img src="./img/like.png" alt="" />102</p>
                <button>Изменить</button>
                <button>Удалить</button>
            </div>
        </div >
    )
}
