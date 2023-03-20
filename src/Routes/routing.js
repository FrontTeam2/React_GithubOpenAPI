import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut";
import HomePage from "../Pages/Home";
import ListPage from "../Pages/List";
import DetailPage from "../Pages/List/Card/Detail/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/:owner/:repository/issues/:page/:sort/:per_page",
        element: <ListPage />,
      },
      {
        path: "/:owner/:repository/issues/:number",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
