import MovieList from "./MovieList";
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)

    return (
        <div className="bg-black w-full text-white">
            <div className="-top-36 sm:-top-24 md:-top-40 relative z-10 w-10/12 mx-auto" >
                {
                    movies.nowPlayingMovies && <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
                }
                {
                    movies.popularMovies && <MovieList title={"Popular"} movies={movies.popularMovies} />
                }
                {
                    movies.topRatedMovies && <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
                }
                {
                    movies.upcomingMovies && <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                }
            </div>
        </div>
    )
}

export default SecondaryContainer;