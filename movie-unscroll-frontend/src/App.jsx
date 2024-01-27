import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import RandomPage from "./features/random/RandomPage";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { alreadyLogged } from "./features/login/loginSlice";

const UpdateUser = lazy(() => import("./features/users/UpdateUser"));
const DetailedMovie = lazy(() => import("./components/DetailedMovie"));
const RatedMovies = lazy(() => import("./components/RatedMovies"));
const Home = lazy(() => import("./components/Home"));
const Suggestions = lazy(() => import("./features/suggestions/Suggestions"));

function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <RandomPage />,
        },
        {
          path: "home",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "user-settings",
          element: (
            <Suspense>
              <UpdateUser />
            </Suspense>
          ),
        },
        {
          path: "detailed-movie/:id",
          element: (
            <Suspense>
              <DetailedMovie />
            </Suspense>
          ),
        },
        {
          path: "rated-movies",
          element: (
            <Suspense>
              <RatedMovies />
            </Suspense>
          ),
        },
        {
          path: "suggestions",
          element: (
            <Suspense>
              <Suggestions />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  useEffect(() => {
    const loggedAuthor = window.localStorage.getItem("loggedMovieUnscroll");
    if (loggedAuthor) {
      dispatch(alreadyLogged(JSON.parse(loggedAuthor)));
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
