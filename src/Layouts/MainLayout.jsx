import React from "react";
import SideBar from "../components/organisms/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Flex from "../components/utility/Flex";
import { AuthProvider } from "../contexts/AuthContext";

const MainLayout = () => {
    return (
        <AuthProvider>
            <Flex>
                <SideBar />
                <Outlet/>
            </Flex>
        </AuthProvider>
    )
};

export default MainLayout;