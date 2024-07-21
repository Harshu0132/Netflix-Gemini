import MovieCard from "./MovieCard"
import { useRef, useState } from "react"
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const MovieList = ({ title, movies }) => {
    const scrollRef = useRef(null);
    const [transformCount, setTransformCount] = useState(0);

    if (movies.length === 0) return null

    const handleLeftClick = () => {
        if (transformCount === 0) {
            return
        }
        scrollRef.current.style.transform = "translateX(" + (transformCount + 200) + "px)";
        setTransformCount(cnt => cnt + 200)
        scrollRef.current.style.transform = "transition: transform 1000ms ease";

    }
    const handleRightClick = () => {
        if (transformCount === -3000) {
            return
        }
        scrollRef.current.style.transform = "translateX(" + (transformCount - 200) + "px)";
        setTransformCount(cnt => cnt - 200)
        scrollRef.current.style.transition = "transform 1000ms ease";
    }

    return (
        <div className="flex mx-auto items-center justify-around">
            <div>
                {
                    movies.length > 4 && <FaCircleChevronLeft className="md:block hidden cursor-pointer" onClick={handleLeftClick} />
                }
            </div>
            <div className="w-[70vw] m-auto ">
                <h1 className="py-5 md:text-2xl text-lg">{title}</h1>
                <div className="flex overflow-x-scroll cursor-grab no-scrollbar" >
                    <div className="flex" id="listOfCards" ref={scrollRef}>
                        {
                            movies.map(movie =>
                                <MovieCard key={movie.id} posterPath={movie.poster_path} />
                            )
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    movies.length > 4 && <FaCircleChevronRight className="md:block hidden cursor-pointer" onClick={handleRightClick} />
                }
            </div>
        </div>
    )
}

export default MovieList;