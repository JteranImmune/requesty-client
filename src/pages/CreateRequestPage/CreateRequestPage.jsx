import React, { useState, useEffect } from "react";
import RequestForm from "../../components/organisms/RequestForm";
import LoaderCreateRequestPage from './LoaderCreateRequestPage';
import requestService from "../../services/request.service";
import PageLayout from "../../components/templates/PageTemplate";
import { REQUEST_CREATE_LIST } from '../../consts'
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


const CreateRequestPage = () =>{

    const toast = useToast()
    const navigate = useNavigate()

    const [data, setData] = useState({ clientList: null, serviceList: null, teamList: null });

    useEffect(() => {
        const loadData = async () => {
            const { clientList, serviceList, teamList } = await LoaderCreateRequestPage();
            setData({ clientList, serviceList, teamList });
        };

        loadData();
    }, []);

    const [requestData, setRequestData] = useState(REQUEST_CREATE_LIST)

    const onSubmit = async (e) =>{

        try {
            e.preventDefault();
            await requestService.createNewRequest(requestData);

            toast({
                title: "Request created.",
                description: "You have created the request successfully!",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
    
            navigate(`/`)

            
        } catch (error) {
            console.error(error);
        }
    }

    const onChange = (e) =>{
        const { name, value } = e.target;
        setRequestData({ ...requestData, [name]:value});
    }

    console.log(requestData);


    return(
        <PageLayout title={'New Request'} container="sm">
            <RequestForm title={"Request Information"} options={data} onSubmit={onSubmit} onChange={onChange}></RequestForm>
        </PageLayout>
    )

}

export default CreateRequestPage;