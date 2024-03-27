import React from "react";
import SideBar from "../components/organisms/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Flex from "../components/utility/Flex";

const MainLayout = () => {
    return (
        <Flex>
            <SideBar />
            <Outlet/>
        </Flex>
    )
};

export default MainLayout;