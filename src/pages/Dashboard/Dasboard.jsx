import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import TaskList from "../../components/templates/TaskList";

const Dasboard =  () => {
    return (
        <ContentWrapper>
            <HeaderPage>Dashboard</HeaderPage>
            <Flex>
                <TaskList />
            </Flex>
        </ContentWrapper>
    )
};

export default Dasboard;