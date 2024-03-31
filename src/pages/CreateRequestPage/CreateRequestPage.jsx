import React, { useState, useEffect } from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import ContentBox from "../../components/utility/ContentBox";
import { useLoaderData } from "react-router-dom";
import RequestForm from "../../components/organisms/RequestForm";
import LoaderCreateRequestPage from './LoaderCreateRequestPage';
import taskService from "../../services/task.service";


const CreateRequestPage = () =>{

    const [data, setData] = useState({ clientList: null, serviceList: null });

    useEffect(() => {
        const loadData = async () => {
            const { clientList, serviceList } = await LoaderCreateRequestPage();
            setData({ clientList, serviceList });
        };

        loadData();
    }, []);

    const [taskData, setTaskData] = useState({
        client:'',
        service:'',
        priority:'',
        dueDate: '',
        title:'',
        description:'',
        attachments:[],
    })

    const onSubmit = async (e) =>{

        try {
            e.preventDefault();
            console.log('Create', taskData)
            await taskService.createNewTask(taskData);
            
        } catch (error) {
            console.error(error);
        }
    }

    const onChange = (e) =>{

        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]:value});
    }

    console.log(taskData)


    return(
        <ContentWrapper>
            <HeaderPage>New Request</HeaderPage>
            <ContentBox container="sm">
                <RequestForm title={"Request Information"} options={data} onSubmit={onSubmit} onChange={onChange}></RequestForm>
            </ContentBox>
        </ContentWrapper>
    )

}

export default CreateRequestPage;