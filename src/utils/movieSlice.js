import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        backgroundMovieTrailer: null,
        movieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },
        addBackgroundMovieTrailer: (state, action) => {
            state.backgroundMovieTrailer = action.payload
        },
        removeTrailer: (state) => {
            state.movieTrailer = null
        }

    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addBackgroundMovieTrailer, addMovieTrailer, removeTrailer } = movieSlice.actions
export default movieSlice.reducer