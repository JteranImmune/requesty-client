import React, { useState } from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import ContentBox from "../../components/utility/ContentBox";
import RequestLayout from "../../Layouts/CreateRequestLayout";

const CreateRequestPage = () =>{

    const [taskData, setTaskData] = useState({
        title:'',
        description:'',
        attachments:[],
        status:'',
        priority:'',
        dueDate: '',
        service:'',
        owner:'',
    })

    return(
        <ContentWrapper>
            <HeaderPage>New Request</HeaderPage>
            <ContentBox container="sm">
                <RequestLayout/>
            </ContentBox>
        </ContentWrapper>
    )

}

export default CreateRequestPage;