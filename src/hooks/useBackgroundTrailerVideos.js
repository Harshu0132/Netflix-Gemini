import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { addBackgroundMovieTrailer } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux";

const useBackgroundTrailerVideos = (movie_id) => {
    const dispatch = useDispatch()

    const backgroundMovieTrailer = useSelector(store => store.movies?.backgroundMovieTrailer)

    const getMovieVideos = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos", API_OPTIONS);
            const json = await data.json();
            const filterVideos = json.results.filter(videos => videos.type === "Trailer")
            const trailer = filterVideos.length ? filterVideos[0] : json.results[0]
            dispatch(addBackgroundMovieTrailer(trailer))
        } catch (error) { }
    }

    useEffect(() => {
        !backgroundMovieTrailer && getMovieVideos()
    }, [])
}

export default useBackgroundTrailerVideos;