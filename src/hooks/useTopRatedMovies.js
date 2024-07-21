import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux"

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies.topRatedMovies)

    const topRatedMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
            const json = await data.json()
            dispatch(addTopRatedMovies(json.results))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        !movies && topRatedMovies()
    }, [])
}

export default useTopRatedMovies;