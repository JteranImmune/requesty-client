import React from "react";
import Flex from "../../components/utility/Flex";
import TaskList from "../../components/organisms/TaskList";
import StatsCard from "../../components/molecules/StatsCard"
import convertAvatarToObject from "../../components/utility/ConvertAvatar";
import { useLoaderData } from "react-router-dom";
import PageLayout from '../../components/templates/PageTemplate'

const DasboardPage =  () => {

    const tasks = useLoaderData();
    
    const modifiedTask = tasks.map(task => convertAvatarToObject(task));

    const totalTask = modifiedTask.length;


    return (

        <PageLayout iconName='Faplus' buttonText='Create Request' title={'Dashboard'}>
            <Flex gap="large" padding="1rem 0">
                <StatsCard title={"Total Requests"} number={totalTask} linkTo={"/requests"} linkText={"View All"}> </StatsCard>
                <StatsCard title={"Total Clients"} number={"52"} linkTo={"/clients"} linkText={"View All"}></StatsCard>
            </Flex>
            <Flex>
                <TaskList data={modifiedTask}/>
            </Flex>
        </PageLayout>
    )
};

export default DasboardPage;