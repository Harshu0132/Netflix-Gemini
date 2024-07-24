import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies.nowPlayingMovies)

    const nowPlayingMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US", API_OPTIONS);
            const json = await data.json()
            dispatch(addNowPlayingMovies(json.results))
        } catch (error) {}
    }

    useEffect(() => {
        !movies && nowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;