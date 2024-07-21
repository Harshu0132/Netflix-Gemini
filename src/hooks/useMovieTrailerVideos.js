import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { addMovieTrailer } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailerVideos = (movie_id) => {
    const dispatch = useDispatch()

    const movieTrailer = useSelector(store => store.movies?.movieTrailer)

    const getMovieVideos = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos", API_OPTIONS);
            const json = await data.json();
            const filterVideos = json.results.filter(videos => videos.type === "Trailer")
            const trailer = filterVideos.length ? filterVideos[0] : json.results[0]
            dispatch(addMovieTrailer(trailer))
        } catch (error) {}
    }

    useEffect(() => {
        !movieTrailer && getMovieVideos()  
    }, [])
}

export default useMovieTrailerVideos;