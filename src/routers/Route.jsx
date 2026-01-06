import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts";
import { Cart, Home, Product } from "../pages";
import { PageNotFound } from "../components";
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
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Route;
