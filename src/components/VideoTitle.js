import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline as InfoIcon } from "react-icons/io";
import { useNavigate } from "react-router-dom"

const VideoTitle = ({ title, overview, movie_id }) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/playVideo?movie_id=" + movie_id)
  }
  return (
    <div className="flex flex-col absolute w-screen h-screen -ml-6 md:ml-0 md:mt-0 mt-6 justify-center bg-gradient-to-r from-black w-screen aspect-video text-white">
      <div className="w-[70vw] mx-auto">
        <h1 className="font-bold md:text-4xl text-lg uppercase text-gray-300">{title}</h1>
        <p className="text-xs my-6 md:block hidden max-w-[20rem] text-gray-400">{overview}</p>
        <div className="flex">
          <button onClick={handleNavigation} className="bg-white text-black md:py-2 py-[6px] md:px-6 px-4 md:rounded-lg rounded-md hover:bg-opacity-40 flex items-center text-sm md:text-lg"><FaPlay className="me-2 md:text-xl text-xs" />Play</button>
          <button className="bg-gray-600 text-white md:inline-flex hidden  py-2 px-3 rounded-lg hover:bg-opacity-40 bg-opacity-50 flex items-center mx-2"><InfoIcon className="me-2 text-xl" />More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle