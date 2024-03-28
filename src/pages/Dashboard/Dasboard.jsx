import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import TaskList from "../../components/templates/TaskList";
import ContentBox from "../../components/utility/ContentBox";
import StatsCard from "../../components/molecules/StatsCard"

const Dasboard =  () => {
    return (
        <ContentWrapper>
            <HeaderPage>Dashboard</HeaderPage>
            <ContentBox padding="0 2rem">
                <Flex gap="large" padding="1rem 0">
                    <StatsCard title={"Total Clients"} number={"52"}></StatsCard>
                    <StatsCard title={"Total Requests"} number={"78"}></StatsCard>
                    <StatsCard title={"Total Revenue"} number={"$15.250"}></StatsCard>
                </Flex>
                <Flex>
                    <TaskList />
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};

export default Dasboard;