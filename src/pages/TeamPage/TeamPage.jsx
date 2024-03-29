import React from "react";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import Flex from "../../components/utility/Flex";
import HeaderPage from "../../components/organisms/HeaderPage/HeaderPage";
import ContentBox from "../../components/utility/ContentBox";
import { useLoaderData } from "react-router-dom";
import UserTeamList from "../../components/templates/UsersTeamList";

const TeamList =  () => {

    const user = useLoaderData();
    
    
    const convertAvatarToObject = (userData) => {
        return {
            ...userData,
            avatar: [userData.avatar.url] // Convert avatar url to an array containing the url
        };
    };
    
    const modifiedUsers = user.map(user => convertAvatarToObject(user));

    return (
        <ContentWrapper>
            <HeaderPage iconName='Faplus' buttonText='Create Team User' onClick={()=>{}}>Team</HeaderPage>
            <ContentBox padding="0 2rem">
                <Flex>
                    <UserTeamList data={modifiedUsers}/>
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};

export default TeamList;