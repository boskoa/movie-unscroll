import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import RandomPage from "./features/random/RandomPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { alreadyLogged } from "./features/login/loginSlice";

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
      ],
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
