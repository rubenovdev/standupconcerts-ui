import axios from "axios"

export const yandexAPI = {
    signIn() {
        // const clientId = process.env.REACT_APP_YANDEX_CLIENT_ID
        // const token = process.env.REACT_APP_YANDEX_TOKEN

        // window.open(`https://oauth.yandex.ru/authorize?client_id=${clientId}&scope=&response_type=token`)

        // const query = window.location.search

        axios.get("https://login.yandex.ru/info", {
            headers: {
                Authorization: "OAuth AQAAAAA6fk6FAAgCl2fuwqCm50rAkg8IY1fS8cg",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).catch(err => {
            console.log(err)
        })

    }
}