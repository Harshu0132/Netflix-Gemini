import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        showLoading: false
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        },

        toggleShowLoading: (state) => {
            state.showLoading = !state.showLoading
        },
    }
})

export const { changeLanguage, toggleShowLoading } = configSlice.actions

export default configSlice.reducer