import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux";
import { ShimmerMainContainer } from "./Shimmer";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    return <ShimmerMainContainer />
    // if (!movies) return

    // const mainMovie = movies[0];
    // const { original_title, overview, id } = mainMovie

    // return (
    //     <div>
    //         <VideoTitle title={original_title} overview={overview} movie_id={id} />
    //         <VideoBackground movie_id={id}/>
    //     </div>
    // )
}

export default MainContainer;