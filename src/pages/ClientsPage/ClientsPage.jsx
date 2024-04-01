import React from "react";
import { useLoaderData } from "react-router-dom";
import ClientList from '../../components/organisms/ClientsList'
import convertAvatarToObject from "../../components/utility/ConvertAvatar";
import PageLayout from "../../components/templates/PageTemplate";

const ClientPageList =  () => {

    const user = useLoaderData();
    
    const modifiedUsers = user.map(user => convertAvatarToObject(user));

    return (
        <PageLayout iconName='FaUserPlus' buttonText='Add' onClick={()=>{}} showButton title={'Clients'}>
            <ClientList data={modifiedUsers}/>
        </PageLayout>
    )
};

export default ClientPageList;