import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SideBar from "../components/organisms/SideBar/SideBar";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <SideBar/>,
        },
    ])

    return <RouterProvider router={router}/>
};

export default AppRoutes;