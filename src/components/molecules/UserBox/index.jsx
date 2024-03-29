import React from "react";
import Text from "../../atoms/Text";
import Avatar from "../../atoms/Avatar";
import Flex from "../../utility/Flex";

const UserBox = ({avatar, email, name}) =>{

    return(
    <Flex gap="medium" align="center"> 
        <Avatar src={avatar} alt={name}/>
        <Flex direction="column" align="flex-start">
            <Text>{name}</Text>
            <Text color="textColorLight">{email}</Text>
        </Flex>
    </Flex>
    )

}

export default UserBox;