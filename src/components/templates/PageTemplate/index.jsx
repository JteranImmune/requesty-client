import React from "react";
import ContentWrapper from "../../utility/ContentWrapper/ContentWrapper";
import Flex from "../../utility/Flex";
import HeaderPage from "../../organisms/HeaderPage/HeaderPage";
import ContentBox from "../../utility/ContentBox";

const PageLayout =  ({title, iconName, padding, buttonText, children, container, ...headerProps}) => {

    return (
        <ContentWrapper>
            <HeaderPage iconName={iconName} buttonText={buttonText} {...headerProps}>{title}</HeaderPage>
            <ContentBox padding={padding} container={container}>
                <Flex direction="column">
                    {children}
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
};
export default PageLayout;