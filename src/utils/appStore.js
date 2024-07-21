import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import geminiReducer from "./geminiSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gemini: geminiReducer,
        config: configReducer,
    }
})

export default appStore;