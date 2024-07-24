import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { MagnifyingGlass } from "react-loader-spinner";
import { toggleShowLoading, toggleShowLoadingFalse } from "../utils/configSlice";
import { useEffect } from "react";

const GeminiMovieSuggestion = () => {
    const dispatch = useDispatch()
    const { geminiMovieNames, geminiMovieResult } = useSelector(store => store.gemini)
    const { showLoading } = useSelector(store => store.config)

    useEffect(() => {
        (geminiMovieResult && showLoading) && dispatch(toggleShowLoading())
    }, [geminiMovieResult])

    if (showLoading) return (
        <div className="w-[80px] mx-auto mt-5">
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
            />
        </div>
    )


    return (
        <>
            {geminiMovieResult &&
                <div className="bg-black  mt-3 px-4 rounded-lg w-10/12 mx-auto text-white bg-opacity-70">
                    {
                        geminiMovieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={geminiMovieResult[index]} />)
                    }
                </div>
            }
        </>

    )
}

export default GeminiMovieSuggestion;