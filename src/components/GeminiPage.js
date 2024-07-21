import { BG_URL } from "../utils/constant";
import GptSearchBar from "./GeminiSearchBar"
import GeminiMovieSuggestion from "./GeminiMovieSuggestion"

const GptPage = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img className="object-cover h-screen w-screen" src={BG_URL} alt="background" />
            </div>
            <GptSearchBar />
            <GeminiMovieSuggestion />

        </div>
    )
}

export default GptPage;