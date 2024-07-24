import { lazy, Suspense } from "react";
// import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayTrailer from "./PlayTrailer";


const Body = () => {
    const Browse = lazy(() => import("./Browse"))

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element:
                <Suspense fallback={(<div>Loading........</div>)}>
                    <Browse />
                </Suspense>
        },
        {
            path: "/playVideo",
            element: <PlayTrailer />
        }
    ])
    return (<RouterProvider router={appRouter} />)
}

export default Body;