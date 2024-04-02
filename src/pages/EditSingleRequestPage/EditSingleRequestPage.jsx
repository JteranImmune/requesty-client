import React, { useContext, useEffect, useState } from "react";
import PageLayout from "../../components/templates/PageTemplate";
import { useParams } from "react-router-dom";
import requestService from "../../services/request.service";
import {EDIT_REQUEST_MOCK , REQUEST_DETAILS_MOCK} from '../../consts'
// import RequestDetails from "../../components/organisms/RequestDetails";
import LoaderRequestSinglePage from "../SingleRequestPage/LoaderRequestSinglePage";
import EditRequestDetails from "../../components/organisms/EditRequestDetails";
import { RequestContext } from "../../contexts/RequestContext";
import { useNavigate } from "react-router-dom"
import { Alert, AlertDescription, AlertIcon, AlertTitle, useToast } from "@chakra-ui/react"

const SingleRequestPage =  () => {

    const [data, setData] = useState({teamList: null });
    // const [request, setRequest] = useState(REQUEST_DETAILS_MOCK);
    const { request, getSingleRequest } = useContext(RequestContext)
    const [requestData, setRequestData] = useState(EDIT_REQUEST_MOCK)
    const { id } = useParams();

    const toast = useToast()
    const navigate = useNavigate()

    useEffect(() => {
         getSingleRequest(id); 
    }, []);
    
        
    useEffect(() => {
        const loadData = async () => {
            const teamList = await LoaderRequestSinglePage();
            setData(teamList);
        };
        
        loadData();
    }, []);
        

    const onSubmit = async (e) =>{
        
        try {
            e.preventDefault()
            const updatedData = await requestService.editOneRequest(id, requestData)
            toast({
                title: "Task edited.",
                description: "You have edited the task successfully!",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
            
            setRequestData(updatedData)

            navigate(`/requests/${id}`)

        } catch (error) {
            
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>error</AlertTitle>
            <AlertDescription>Unable to edit the task.</AlertDescription>
        </Alert>
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setRequestData({ ...requestData, [name]:value});
    };

    console.log(requestData)


    return (
        <PageLayout title={'Edit Request Details'}>
            <EditRequestDetails options={data} requestDetails={request} onSubmit={onSubmit} onChange={onChange}/>
        </PageLayout>
    )
};
export default SingleRequestPage;