import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import TaskList from "../../components/templates/TaskList";
import ContentBox from "../../components/utility/ContentBox";
import StatsCard from "../../components/molecules/StatsCard"
import { useLoaderData } from "react-router-dom";

const Dasboard =  () => {

    const tasks = useLoaderData();

    const convertAvatarToObject = (userData) => {
        return {
            ...userData,
            avatar: [userData.avatar] // Convert avatar url to an array containing the url
        };
    };
    
    const modifiedTask = tasks.map(task => convertAvatarToObject(task));

    const totalTask = modifiedTask.length;

    return (
        <ContentWrapper>
            <HeaderPage iconName='Faplus' buttonText='Create Task' onClick={()=>{}}>Dashboard</HeaderPage>
            <ContentBox padding="0 2rem">
                <Flex gap="large" padding="1rem 0">
                    <StatsCard title={"Total Requests"} number={totalTask} linkTo={"/requests"} linkText={"View All"}> </StatsCard>
                    <StatsCard title={"Total Clients"} number={"52"} linkTo={"/clients"} linkText={"View All"}></StatsCard>
                </Flex>
                <Flex>
                    <TaskList data={modifiedTask}/>
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};

export default Dasboard;