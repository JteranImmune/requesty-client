import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import TaskList from "../../components/organisms/TaskList";
import ContentBox from "../../components/utility/ContentBox";
import { useLoaderData } from 'react-router-dom'

const SingleRequestPage =  () => {

    const tasks = useLoaderData();

    return (
        <ContentWrapper>
            <HeaderPage iconName='FaPlus' buttonText='Edit request' LinkTo={"/"} showLink>Request Details</HeaderPage>
            <ContentBox padding="0 2rem">
                <Flex>
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};
export default SingleRequestPage;