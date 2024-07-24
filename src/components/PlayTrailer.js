import { useSearchParams } from "react-router-dom"
import useMovieTrailerVideos from "../hooks/useMovieTrailerVideos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeTrailer } from "../utils/movieSlice";

const PlayTrailer = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    const movie_id = searchParams.get("movie_id")
    const movieTrailer = useSelector(store => store.movies?.movieTrailer)
    useMovieTrailerVideos(movie_id)

    useEffect(() => { return () => dispatch(removeTrailer()) }, [])

    if (!movieTrailer) return

    const { key } = movieTrailer




    return (
        <div className="w-screen h-screen">
            <iframe className="w-full h-screen "
                src={"https://www.youtube.com/embed/" + key + "?autoplay=1&showinfo=0?modestbranding=1&loop=1&playlist=" + key} title="YouTube video player"
                allow="accelerometer; 
                autoplay; 
                modestbranding; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share"
            >
            </iframe>
        </div>
    )
}

export default PlayTrailer

