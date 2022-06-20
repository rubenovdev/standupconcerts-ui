import axios from 'axios';
const key = "AIzaSyDs39fHrcGbWyCim1KaFAW-9iBJ2ZkYlroz"

const base = axios.create({
    baseURL: "",
    // params: {
    //     key,
    //     part: "snippet"
    // }
})

export const youtubeAPI = {
    getVideo(videoId: number | string) {
        base.get("https://www.youtube.com/watch?v=HQULZLebAvM", {
            // params: {
            //     id: videoId
            // }
        })
    }
}