import React from "react";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Divider from "../../atoms/Divider";

const HeaderPage = ({children, ...props}) =>{
    return(
        <Flex padding="1rem 2rem" direction="column">
            <Flex padding="0.5rem 0">
                <Text size="md" variant="display" {...props}>
                    {children}
                </Text>
            </Flex>
            <Divider/>
        </Flex>
    )
};

export default HeaderPage;