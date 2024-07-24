import { useSelector } from "react-redux"
import useMovieTrailerVideos from "../hooks/useMovieTrailerVideos"

const VideoBackground = ({ movie_id }) => {
    
    const movieTrailer = useSelector(store => store.movies?.movieTrailer)
    useMovieTrailerVideos(movie_id)
    if (!movieTrailer) return
    const { key } = movieTrailer

    return (
        <div className="">
            <iframe className="w-full h-screen object-contain"
                src={"https://www.youtube.com/embed/" + key + "?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=" + key} title="YouTube video player" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default VideoBackground;