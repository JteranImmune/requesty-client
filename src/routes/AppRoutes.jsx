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
import LoaderRequestSinglePage from "../pages/SingleRequestPage/LoaderRequestSinglePage";
import LoaderEditRequestSinglePage from "../pages/EditSingleRequestPage/LoaderEditSingleRequestPage";
import EditSingleRequestPage from '../pages/EditSingleRequestPage/EditSingleRequestPage'
import RegisterUser from "../pages/RegisterUser/RegisterUser";
import LogInUser from "../pages/LogInUser/Login";

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
                    path: "requests/:id",
                    element: <SingleRequestPage />,
                    loader: LoaderRequestSinglePage
                },
                {
                    path: "requests/edit/:id",
                    element: <EditSingleRequestPage />,
                    loader: LoaderEditRequestSinglePage
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
                },
                {
                    path:'/register',
                    element: <RegisterUser />,
                },
            ]
        },
        {
            path:'/login',
            element: <LogInUser />,
        }
    ])

    return <RouterProvider router={router}/>
};

export default AppRoutes;