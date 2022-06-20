export const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

export const setCookie = (name: string, value: string, days = 30) => {
    document.cookie = `${name}=${value};max-age=${3600 * 24 * days};Path=/;`
}