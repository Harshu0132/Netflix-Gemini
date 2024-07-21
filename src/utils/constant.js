export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_OPTIONS}`
    }
};
export const POSTER_PATH_CDN = "https://image.tmdb.org/t/p/w300/"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"

export const GOOGLE_AI_STUDIO_API = process.env.REACT_APP_GOOGLE_AI_STUDIO_API

export const SUPPORTED_LANGUAGE = [{ identifier: "en", name: "English" }, { identifier: "hindi", name: "Hindi" }, { identifier: "spanish", name: "Spanish" }]