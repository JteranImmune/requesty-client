import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dasboard from "../pages/DashboardPage/DasboardPage";
import TeamList from "../pages/TeamPage/TeamPage";
import Requests from "../pages/RequestsPage/RequestsPage";
import LoaderRequestPage from "../pages/RequestsPage/LoaderRequestPage";
import LoaderDashboardPage from "../pages/DashboardPage/LoaderDashboardPage";
import LoaderTeamPage from "../pages/TeamPage/LoaderTeamPage";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
                path: "/",
                element: <MainLayout/>,
                children: [{
                    path: "/",
                    element:<Dasboard/>,
                    loader: LoaderDashboardPage
                },
                {
                    path: "/requests",
                    element:<Requests />,
                    loader:LoaderRequestPage
                },
                {
                    path: "task/create",
                    element: <div>Create</div>
                },
                {
                    path: '/services',
                    element: <div>Services Page</div>,
                    loader: () => {}
                },
                {
                    path: '/admin/services',
                    element: <div>Admin Services</div>,
                    loader: () => {}
                },
                {
                    path: '/clients',
                    element: <div>Clients</div>,
                    loader: () => {}
                },
                {
                    path:'/team',
                    element: <TeamList />,
                    loader: LoaderTeamPage
                }
            ]
        },
    ])

    return <RouterProvider router={router}/>
};

export default AppRoutes;