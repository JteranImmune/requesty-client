import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/PageTemplate";
import { useParams } from "react-router-dom";
import requestService from "../../services/request.service";
import {REQUEST_DETAILS_MOCK} from '../../consts'
import RequestDetails from "../../components/organisms/RequestDetails";
import LoaderRequestSinglePage from "./LoaderRequestSinglePage"
import Flex from "../../components/utility/Flex";
import Button from "../../components/atoms/Button";

const SingleRequestPage =  () => {

    const [data, setData] = useState({teamList: null });
    const [request, setRequest] = useState(REQUEST_DETAILS_MOCK);

    useEffect(() => {
        const loadData = async () => {
            const teamList = await LoaderRequestSinglePage();
            setData(teamList);
        };

        loadData();
    }, []);


    const {
        title,
        description,
        status,
        owner,
        dueDate,
        createdAt,
        priority
    } = request;

    const { id } = useParams();

    const getSingleRequest = async () =>{
        try {
             const SingleRequest = await requestService.getOneRequest(id);
             setRequest(SingleRequest)

        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(()=>{
       getSingleRequest()
    },[])



    return (
        <PageLayout title={'Request Details'} iconName="FaEdit" buttonText={"Edit Request"} LinkTo={`/request/edit/${request._id}`} showLink>
            <RequestDetails options={data} requestDetails={request} disabled/>
        </PageLayout>
    )
};
export default SingleRequestPage;