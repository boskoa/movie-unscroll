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
const MovieSearch = lazy(
  () => import("./components/DetailedMovie/MovieSearch"),
);
const DetailedPerson = lazy(() => import("./components/DetailedPerson"));
const Details = lazy(() => import("./components/DetailedPerson/Details"));
const RatedMovies = lazy(() => import("./components/RatedMovies"));
const Home = lazy(() => import("./components/Home"));
const Suggestions = lazy(() => import("./features/suggestions/Suggestions"));
const AllTrending = lazy(() => import("./features/trending/AllTrending"));
const AllTopRated = lazy(() => import("./features/topRated/AllTopRated"));
const AllPopular = lazy(() => import("./features/popular/AllPopular"));
const AllTheaters = lazy(() => import("./features/theaters/AllTheaters"));
const Discover = lazy(() => import("./features/discover/Discover"));
const Bookmarks = lazy(() => import("./features/bookmarks/Bookmarks"));
const About = lazy(() => import("./components/About"));
//Testing CI/CD
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
          path: "movie-search",
          element: (
            <Suspense>
              <MovieSearch />
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
          path: "detailed-person/",
          element: (
            <Suspense>
              <DetailedPerson />
            </Suspense>
          ),
          children: [
            {
              path: ":id",
              element: (
                <Suspense>
                  <Details />
                </Suspense>
              ),
            },
          ],
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
        {
          path: "trending",
          element: (
            <Suspense>
              <AllTrending />
            </Suspense>
          ),
        },
        {
          path: "top-rated",
          element: (
            <Suspense>
              <AllTopRated />
            </Suspense>
          ),
        },
        {
          path: "popular",
          element: (
            <Suspense>
              <AllPopular />
            </Suspense>
          ),
        },
        {
          path: "theaters",
          element: (
            <Suspense>
              <AllTheaters />
            </Suspense>
          ),
        },
        {
          path: "discover",
          element: (
            <Suspense>
              <Discover />
            </Suspense>
          ),
        },
        {
          path: "bookmarks",
          element: (
            <Suspense>
              <Bookmarks />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense>
              <About />
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
    const loggedUser = window.localStorage.getItem("loggedMovieUnscroll");
    if (loggedUser) {
      dispatch(alreadyLogged(JSON.parse(loggedUser)));
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
