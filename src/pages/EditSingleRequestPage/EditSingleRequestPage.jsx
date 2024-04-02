import React, { useContext, useEffect, useState } from "react";
import PageLayout from "../../components/templates/PageTemplate";
import { useParams } from "react-router-dom";
import requestService from "../../services/request.service";
import {EDIT_REQUEST_MOCK , REQUEST_DETAILS_MOCK} from '../../consts'
import RequestDetails from "../../components/organisms/RequestDetails";
import LoaderRequestSinglePage from "../SingleRequestPage/LoaderRequestSinglePage";
import EditRequestDetails from "../../components/organisms/EditRequestDetails";
import { RequestContext } from "../../contexts/RequestContext";

const SingleRequestPage =  () => {

    const [data, setData] = useState({teamList: null });
    // const [request, setRequest] = useState(REQUEST_DETAILS_MOCK);
    
    const { request, getSingleRequest } = useContext(RequestContext)
    
    const [requestData, setRequestData] = useState(EDIT_REQUEST_MOCK)

    const { id } = useParams();

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
        e.preventDefault()
        const updatedData = await requestService.editOneRequest(id, requestData)
        setRequestData(updatedData)
        
        try {
        } catch (error) {
            
          console.log("ERROR ==>", error)
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setRequestData({ ...requestData, [name]:value});
    };


    return (
        <PageLayout title={'Edit Request Details'}>
            <EditRequestDetails options={data} requestDetails={request} onSubmit={onSubmit} onChange={onChange}/>
        </PageLayout>
    )
};
export default SingleRequestPage;