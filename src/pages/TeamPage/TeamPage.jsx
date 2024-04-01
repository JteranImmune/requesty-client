import React from "react";
import { useLoaderData } from "react-router-dom";
import UserTeamList from "../../components/organisms/UsersTeamList";
import convertAvatarToObject from "../../components/utility/ConvertAvatar";
import PageLayout from "../../components/templates/PageTemplate";

const TeamList =  () => {

    const user = useLoaderData();
    
    const modifiedUsers = user.map(user => convertAvatarToObject(user));

    return (
        <PageLayout iconName='FaUserPlus' buttonText='Add' onClick={()=>{}} showButton title={'Team'}>
            <UserTeamList data={modifiedUsers}/>
        </PageLayout>

    )
};

export default TeamList;