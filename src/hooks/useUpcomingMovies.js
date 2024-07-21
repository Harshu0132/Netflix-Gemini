import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux"

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies.upcomingMovies)

    const upcomingMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);
            const json = await data.json()
            dispatch(addUpcomingMovies(json.results))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        !movies && upcomingMovies()
    }, [])
}

export default useUpcomingMovies;