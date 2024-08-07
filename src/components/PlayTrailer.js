import { useSearchParams } from "react-router-dom"
import useMovieTrailerVideos from "../hooks/useMovieTrailerVideos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeTrailer } from "../utils/movieSlice";
import { toggleShowLoading } from "../utils/configSlice";
// import { ShimmerMainContainer } from "./Shimmer"
import { ShimmerMainContainer } from "./Shimmer"

const PlayTrailer = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const { showLoading } = useSelector(store => store.config)

    const movie_id = searchParams.get("movie_id")
    const movieTrailer = useSelector(store => store.movies?.movieTrailer)
    useMovieTrailerVideos(movie_id)

    useEffect(() => {
        dispatch(toggleShowLoading())
        return () => dispatch(removeTrailer())
    }, [])

    if (!movieTrailer) return

    const { key } = movieTrailer


    return (
        <div className="w-screen h-screen">
            {
                showLoading && (
                    <div className="w-screen flex z-0 justify-center fixed">
                        <ShimmerMainContainer/>
                    </div>
                )
            }

            <iframe className="w-full h-screen z-10"
                onLoad={(e) => {
                    (showLoading) && dispatch(toggleShowLoading())
                }}
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

