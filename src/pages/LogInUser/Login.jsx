import React, { useContext, useEffect, useState } from "react";
import Flex from "../../components/utility/Flex";
import InputField from "../../components/molecules/InputField";
import FormBox from "../../components/organisms/FormBox";
import Button from "../../components/atoms/Button";
import Text from "../../components/atoms/Text";
import { LOGIN_LIST } from "../../consts";
import { AuthContext } from "../../contexts/AuthContext";
import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: auto;
    align-self: auto;
    overflow: inherit;
    border: none;
    height: 100vh;
    width: 100%;
    z-index: 1;
    background: #f2f2f2;

`

const LogInUser = () => {

    const {login} = useContext(AuthContext);

    const [userData, setUserData] = useState(LOGIN_LIST)


    const onChange = (e) => {
      const { name, value } = e.target
      setUserData({ ...userData, [name]: value })
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        await login(userData);
    }

    useEffect(() =>{
        console.log(userData);
    }, [userData])

    return (
        <LoginContainer  display="flex" align="center" justify="center" height="100vh">
            <Flex direction="column" height="auto"  justify="center" maxwidth="xsm" padding="0 0 5rem 0">
                <Text variant="display" size='md' weight="bold" align='center'>Log in</Text>
                <FormBox onSubmit={onSubmit} style={{marginTop:'1.5rem'}} >
                    <InputField label={"Email"} type="email" name="email" onChange={onChange}/>
                    <InputField label={"Password"} type="password" name="password" onChange={onChange}/>
                    <Button type='submit'>Log in</Button>
                </FormBox>    
            </Flex>
        </LoginContainer>
    )
}

export default LogInUser;