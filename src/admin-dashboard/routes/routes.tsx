import { createBrowserRouter } from "react-router-dom";
import { Banner, Categories, DailyBestSells, OverView, SpecialDishes, UsersOpinions } from "../features";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <OverView /> },
      {
        path: "home",
        children: [
          { path: "banners", element: <Banner /> },
          { path: "best-seller", element: <DailyBestSells /> },
          { path: "categories", element: <Categories /> },
          { path: "special-dishes", element: <SpecialDishes /> },
          { path: "users-opinions", element: <UsersOpinions /> },
        ],
      },
    ],
  },
]);