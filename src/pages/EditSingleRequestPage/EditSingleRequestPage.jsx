import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/PageTemplate";
import { useParams } from "react-router-dom";
import requestService from "../../services/request.service";
import {REQUEST_DETAILS_MOCK} from '../../consts'
import RequestDetails from "../../components/organisms/RequestDetails";
import LoaderRequestSinglePage from "../SingleRequestPage/LoaderRequestSinglePage";

const SingleRequestPage =  () => {

    const [data, setData] = useState({teamList: null });
    const [request, setRequest] = useState(REQUEST_DETAILS_MOCK);

    // const [isEditable, setIsEditable] = useState(false)

    // const handleEditClick = () =>{
    //     setIsEditable(current => !current)
    // }

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

    console.log(request);

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
        <PageLayout title={'Edit Request Details'}>
            <RequestDetails options={data} requestDetails={request} isEditable/>
        </PageLayout>
    )
};
export default SingleRequestPage;