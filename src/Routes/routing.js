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
                path: "/",
                element: <MainPage />,
            },
            { path: "/", element: <DetailPage /> },
        ],
    },
]);

export default router;
