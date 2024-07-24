import { POSTER_PATH_CDN } from "../utils/constant"

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null
    return (
        <div className="md:w-[200px] w-24 overflow-hidden pr-4 ">
            <img src={POSTER_PATH_CDN + posterPath} className="" alt="posterImg" />
        </div>
    )
}

export default MovieCard