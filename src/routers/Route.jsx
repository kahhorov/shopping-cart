import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts";
import { Home } from "../pages";

function Route() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <div>Page Not Found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Route;
