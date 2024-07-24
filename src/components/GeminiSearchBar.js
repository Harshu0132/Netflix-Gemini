import { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux"
import model from "../utils/googleGenerativeAi"
import { API_OPTIONS } from "../utils/constant";
import { addGeminiMovieResult } from "../utils/geminiSlice";
import { toggleShowLoading } from "../utils/configSlice";

const GeminiSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  const searchRef = useRef(null)
  const dispatch = useDispatch()

  const handleSearch = async () => {
    try {
      if (searchRef.current.value.length === 0) return

      dispatch(toggleShowLoading())

      const Query = `act like a movie recommendation system and suggest some movies for the query: ${searchRef.current.value}. Only give me names of 5 movies, comma separated like the example result should like given to you . Example Result: Gadar, Koi Mil Gaya, KGF, Chennai Express, Hera Phe,....`

      const result = await model.generateContent(Query)
      const response = await result.response
      const geminiMovies = response.text().split(", ");

      const promiseArray = await Promise.all(geminiMovies.map(movie => searchMovieTMDB(movie)))
      const tmdbResults = await Promise.all(promiseArray)

      dispatch(addGeminiMovieResult({ movieNames: geminiMovies, movieResults: tmdbResults }))
    } catch (error) {
      console.log("error from search");
    }

  }

  const searchMovieTMDB = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    const data = await fetch(url, API_OPTIONS)
    const json = await data.json()
    return json.results;
  }

  return (
    <div className="md:pt-[10%] pt-[40%] flex justify-center">
      <form className="md:w-1/2 w-full py-3 mx-3 md:mx-0 md:grid md:grid-cols-12 flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchRef} type="text" className="md:col-span-9 py-3 md:px-3 mb-2 md:mb-0 px-3 rounded-l-lg md:rounded-r-none rounded-lg" placeholder={language[langKey].GptSearchPlaceholder} />
        <button className="bg-red-800 md:col-span-3 inline-block py-3 rounded-r-lg md:rounded-l-none rounded-l-lg text-white" onClick={handleSearch}>{language[langKey].search}</button>
      </form>
    </div>
  )
}

export default GeminiSearchBar;