import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import DetailPage from "../Pages/Detail";
import HomePage from "../Pages/Home";
import MainPage from "../Pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },

            {
                path: "/:owner/:repository/:page/:sort/:per_page",
                element: <MainPage />,
            },
            { path: "/:owner/:repository/:number", element: <DetailPage /> },
        ],
    },
]);

export default router;
