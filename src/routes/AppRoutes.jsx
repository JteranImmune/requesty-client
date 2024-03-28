import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dasboard from "../pages/Dashboard/Dasboard";
import Requests from "../pages/Requests/Requests";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>,
            children: [{
                path: "/",
                element:<Dasboard/>
            }]
        },
    ])

    return <RouterProvider router={router}/>
};

export default AppRoutes;