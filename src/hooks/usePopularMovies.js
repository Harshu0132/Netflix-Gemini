import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux"

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const movies = useSelector  (store => store.movies.popularMovies)

    const popularMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
            const json = await data.json()
            dispatch(addPopularMovies(json.results))
        } catch (error) {}
    }

    useEffect(() => {
        !movies && popularMovies()
    }, [])
}

export default usePopularMovies;