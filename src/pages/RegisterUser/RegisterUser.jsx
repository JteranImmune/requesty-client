import React from "react";
import styled from "styled-components";
import Flex from "../../components/utility/Flex";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import ContentBox from "../../components/utility/ContentBox";
import InputField from "../../components/molecules/InputField";
import InputSelect from "../../components/molecules/InputSelect";
import FormBox from "../../components/organisms/FormBox";
import Button from "../../components/atoms/Button";

const RegisterUser = () => {
    return (
        <ContentWrapper>
            <ContentBox>
                <Flex direction="column" height="100vh">
                <FormBox onSubmit={(e) => e.preventDefault()}>
                    <InputField label={"Name"} type="text" name="name"/>
                    <InputField label={"Email"} type="email" name="email"/>
                    <InputField label={"Password"} type="password" name="password"/>
                    <InputSelect label={'Role'} defaultValue={'Select a Role'} />
                    <Button type='submit'>Register</Button>
                </FormBox>    
                </Flex>
            </ContentBox>
        </ContentWrapper>
    )
}

export default RegisterUser;