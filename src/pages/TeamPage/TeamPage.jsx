import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import UserTeamList from "../../components/organisms/UsersTeamList";
import convertAvatarToObject from "../../components/utility/ConvertAvatar";
import PageLayout from "../../components/templates/PageTemplate";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    useToast,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import RegisterUser from "../RegisterUser/RegisterUser";
import { REGISTER_LIST } from "../../consts";
import authService from "../../services/auth.service";

const TeamList =  () => {

    const user = useLoaderData();
    const modifiedUsers = user.map(user => convertAvatarToObject(user));
    const [showModal, setShowModal] = useState(false)

    const [userData, setUserData] = useState(REGISTER_LIST)

      const toast = useToast()
      const navigate = useNavigate()

      const onChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
      }

      const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await authService.signup(userData)
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 4000,
            isClosable: true,
          })
          navigate("/team")
          setShowModal(false)
          
        } catch (error) {
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>error</AlertTitle>
                <AlertDescription>Unable to register user.</AlertDescription>
            </Alert>
        }
      }

      console.log(userData)

    return (
        <PageLayout iconName='FaUserPlus' buttonText='Add' onClick={() => setShowModal(true)} showButton title={'Team'}>
            <UserTeamList data={modifiedUsers}/>
            {showModal && (
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <ModalOverlay>
                        <ModalContent>
                                <RegisterUser onChange={onChange} onSubmit={onSubmit}></RegisterUser>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
            )}
        </PageLayout>

    )
};

export default TeamList;