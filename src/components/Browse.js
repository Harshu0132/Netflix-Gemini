import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import GeminiPage from "./GeminiPage"
import { useSelector } from "react-redux"

const Browse = () => {
    const showGeminiContent = useSelector((store) => store.gemini.showGeminiSearch)

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()

    return (
        <div>
            <Header />
            {
                showGeminiContent ? <GeminiPage /> : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )
            }
        </div>
    )
}

export default Browse;