import { POSTER_PATH_CDN } from "../utils/constant"
import { Link } from "react-router-dom"

const MovieCard = ({ posterPath, movie }) => {
    const { id } = movie
    if (!posterPath) return null
    return (
        <Link to={"/playVideo?movie_id=" + id}>
            <div className="md:w-[200px] w-24 overflow-hidden pr-4 ">
                <img src={POSTER_PATH_CDN + posterPath} className="" alt="posterImg" />
            </div>
        </Link>
    )
}

export default MovieCard