import React, { useContext, useEffect, useState } from "react";
import Flex from "../../components/utility/Flex";
import InputField from "../../components/molecules/InputField";
import FormBox from "../../components/organisms/FormBox";
import Button from "../../components/atoms/Button";
import Text from "../../components/atoms/Text";
import { LOGIN_LIST } from "../../consts";
import { Alert, AlertDescription, AlertIcon, AlertTitle, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ContentBox from "../../components/utility/ContentBox";
import { AuthContext } from "../../contexts/AuthContext";

const LogInUser = () => {

    const {login} = useContext(AuthContext);

    const [userData, setUserData] = useState(LOGIN_LIST)

    const toast = useToast()
    const navigate = useNavigate()


    const onChange = (e) => {
      const { name, value } = e.target
      setUserData({ ...userData, [name]: value })
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        await login(userData);
        navigate("/");
    }

    useEffect(() =>{
        console.log(userData);
    }, [userData])

    return (
        <ContentBox  display="flex" align="center" justify="center" height="100vh">
            <Flex direction="column" height="auto"  justify="center" maxwidth="xsm" padding="0 0 5rem 0">
                <Text variant="display" size='md' weight="bold" align='center'>Log in</Text>
                <FormBox onSubmit={onSubmit} style={{marginTop:'1.5rem'}} >
                    <InputField label={"Email"} type="email" name="email" onChange={onChange}/>
                    <InputField label={"Password"} type="password" name="password" onChange={onChange}/>
                    <Button type='submit'>Log in</Button>
                </FormBox>    
            </Flex>
        </ContentBox>
    )
}

export default LogInUser;