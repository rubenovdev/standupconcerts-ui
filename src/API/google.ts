import { GoogleUser } from './../types/API/google.d';
declare var gapi: any;

export const googleAPI = {
    signIn(): Promise<GoogleUser | Error> {
        return new Promise((resolve, reject) => {
            gapi.load("client:auth2", function () {
                gapi.auth2.init({
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    plugin_name: "chat"
                }).signIn().then((user: any) => {
                    const userData = user.getBasicProfile()
                    resolve({
                        imgUrl: userData.getImageUrl(),
                        email: userData.getEmail(),
                        name: userData.getName(),
                        id: userData.getId()
                    })
                }, (err: any) => {
                    reject(err)
                })
            })
        })
    }
}
