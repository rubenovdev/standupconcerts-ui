import { ResponseVkUser, VkUser } from './../types/API/vk.d';
import axios from "axios"

export const vkAPI = {
    async redirect() {
        const clientId = process.env.REACT_APP_VK_CLIENT_ID
        const redirectUri = window.location.protocol + "//" + window.location.host + "/" + process.env.REACT_APP_VK_REDIRECT_URI

        if (!(clientId && redirectUri)) {
            throw new Error("no client id found")
        }
        window.open(`https://oauth.vk.com/authorize?client_id=${clientId}&display=page&redirect_uri=${redirectUri}&scope=email&response_type=token&v=5.21`)
    },
    async signIn(accessToken: string, id: string, user: Partial<VkUser>) {
        if (!user.email) {
            throw new Error("no email in vk auth")
        }

        const profile = await this.getProfile(id, accessToken)
        profile.email = user.email
        return profile
    },
    async getProfile(id: string, accessToken: string): Promise<Partial<VkUser>> {
        const { data: { response: [user] } } = await axios.get<ResponseVkUser>("http://localhost:8010/proxy/method/users.get", {
            params: {
                access_token: accessToken,
                v: "5.131",
                fields: "photo_400_orig",
                usersIds: id,
            }
        })

        return {
            name: user.first_name + " " + user.last_name,
            imgUrl: user.photo_400_orig,
            id: user.id
        }
    }
}