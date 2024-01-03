import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import RandomPage from "./features/random/RandomPage";

function App() {
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
