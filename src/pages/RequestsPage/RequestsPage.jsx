import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import TaskList from "../../components/organisms/TaskList";
import ContentBox from "../../components/utility/ContentBox";
import { useLoaderData } from 'react-router-dom'

const RequestsPage =  () => {

    const tasks = useLoaderData();

    return (
        <ContentWrapper>
            <HeaderPage iconName='FaPlus' buttonText='Create Task' LinkTo={"/request/create"} showLink>Requests</HeaderPage>
            <ContentBox padding="0 2rem">
                <Flex>
                    <TaskList data={tasks} />
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};
export default RequestsPage;