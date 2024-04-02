import React from "react";
import Flex from "../../components/utility/Flex";
import ContentWrapper from "../../components/utility/ContentWrapper/ContentWrapper";
import InputField from "../../components/molecules/InputField";
import InputSelect from "../../components/molecules/InputSelect";
import FormBox from "../../components/organisms/FormBox";
import Button from "../../components/atoms/Button";
import { ROLE_LIST } from "../../consts";
import Text from "../../components/atoms/Text";

const RegisterUser = ({onSubmit, onChange}) => {
    return (
        <Flex direction="column" height="auto"  justify="center" maxwidth="sm" padding="2rem 0 0 0">
            <Text variant="display" size='md' align='center'>Register User</Text>
            <FormBox onSubmit={onSubmit}>
                <InputField label={"Name"} type="text" name="name" onChange={onChange}/>
                <InputField label={"Email"} type="email" name="email" onChange={onChange}/>
                <InputField label={"Password"} type="password" name="password" onChange={onChange}/>
                <InputSelect label={'Role'} name={'role'} placeholder={'Select a Role'} options={ROLE_LIST} onChange={onChange}/>
                <Button type='submit'>Register</Button>
            </FormBox>    
        </Flex>
    )
}

export default RegisterUser;