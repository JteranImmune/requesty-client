import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import ContentBox from "../../components/utility/ContentBox";
import { useLoaderData } from "react-router-dom";
import UserTeamList from "../../components/organisms/UsersTeamList";
import convertAvatarToObject from "../../components/utility/ConvertAvatar";

const TeamList =  () => {

    const user = useLoaderData();
    
    const modifiedUsers = user.map(user => convertAvatarToObject(user));

    return (
        <ContentWrapper>
            <HeaderPage iconName='FaUserPlus' buttonText='Add' onClick={()=>{}} showButton>Team</HeaderPage>
            <ContentBox padding="0 2rem">
                <Flex>
                    <UserTeamList data={modifiedUsers}/>
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};

export default TeamList;