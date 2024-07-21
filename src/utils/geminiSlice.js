import { createSlice } from "@reduxjs/toolkit"

const geminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch: false,
        geminiMovieNames: null,
        geminiMovieResult: null,
    },
    reducers: {
        toggleShowGeminiContent: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch
        },

        addGeminiMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload

            state.geminiMovieNames = movieNames
            state.geminiMovieResult = movieResults
        }
    }
})

export const { toggleShowGeminiContent, addGeminiMovieResult } = geminiSlice.actions

export default geminiSlice.reducer;