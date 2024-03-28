import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import TaskList from "../../components/templates/TaskList";
import ContentBox from "../../components/utility/ContentBox";

const Requests =  () => {
    return (
        <ContentWrapper>
            <HeaderPage>Request</HeaderPage>
            <ContentBox padding="0 2rem">
                <Flex>
                    <TaskList />
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};
export default Requests;