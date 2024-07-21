import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestion = () => {
    const { geminiMovieNames, geminiMovieResult } = useSelector(store => store.gemini)

    if (!geminiMovieResult) return;

    return (
        <div className="bg-black  mt-3 px-4 rounded-lg w-10/12 mx-auto text-white  bg-opacity-70">
            {
                geminiMovieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={geminiMovieResult[index]} />)
            }
        </div>
    )
}

export default GeminiMovieSuggestion;