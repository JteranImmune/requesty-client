import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import DasboardPage from "../pages/DashboardPage/DasboardPage";
import TeamList from "../pages/TeamPage/TeamPage";
import ClienPagetList from '../pages/ClientsPage/ClientsPage'
import RequestsPage from "../pages/RequestsPage/RequestsPage";
import LoaderRequestPage from "../pages/RequestsPage/LoaderRequestPage";
import LoaderDashboardPage from "../pages/DashboardPage/LoaderDashboardPage";
import LoaderTeamPage from "../pages/TeamPage/LoaderTeamPage";
import LoaderClientPage from "../pages/ClientsPage/LoaderClientPage";
import CreateRequestPage from "../pages/CreateRequestPage/CreateRequestPage";
import LoaderCreateRequestPage from "../pages/CreateRequestPage/LoaderCreateRequestPage";
import SingleRequestPage from "../pages/SingleRequestPage/SingleRequestPage";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
                path: "/",
                element: <MainLayout/>,
                children: [{
                    path: "/",
                    element:<DasboardPage/>,
                    loader: LoaderDashboardPage
                },
                {
                    path: "/requests",
                    element:<RequestsPage />,
                    loader:LoaderRequestPage
                },
                {
                    path: "request/create",
                    element: <CreateRequestPage />,
                    loader: LoaderCreateRequestPage
                },
                {
                    path: "request/:id",
                    element: <SingleRequestPage />,
                    // loader: LoaderCreateRequestPage
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
                    element: <ClienPagetList />,
                    loader: LoaderClientPage
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