import React from "react";
import TaskList from "../../components/organisms/TaskList";
import { useLoaderData } from 'react-router-dom'
import PageLayout from "../../components/templates/PageTemplate";

const RequestsPage =  () => {

    const request = useLoaderData();

    return (
        <PageLayout iconName='FaPlus' buttonText='Create Task' LinkTo={"/request/create"} showLink title={'Requests'}>
            <TaskList data={request} />
        </PageLayout>

    )
};
export default RequestsPage;