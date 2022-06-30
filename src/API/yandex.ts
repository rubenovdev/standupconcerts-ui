import { ResponseYandexUser, YandexUser } from './../types/API/yandex.d';
import axios from "axios"

export const yandexAPI = {
    redirect() {
        const clientId = process.env.REACT_APP_YANDEX_CLIENT_ID
        const redirectUri = window.location.protocol + "//" + window.location.host + "/" + process.env.REACT_APP_YANDEX_REDIRECT_URI
        
        if (!(clientId && redirectUri)) {
            throw new Error("no client id found")
        }
        window.open(`https://oauth.yandex.ru/authorize?client_id=${clientId}&scope=&response_type=token&hauth.done=Yandex&redirect_uri=${redirectUri}`)
    },

    async signIn(accessToken: string) {
        const { data } = await axios.get<ResponseYandexUser>("http://localhost:8010/proxy/info", {
            headers: {
                Authorization: `OAuth ${accessToken}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        })

        const user = {
            email: data.default_email,
            name: data.display_name,
            id: data.id,
            imgUrl: "https://avatars.yandex.net/get-yapic/${data.default_avatar_id}/islands-200"
        } as YandexUser

        return user
    }
}