import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ClientList from '../../components/organisms/ClientsList'
import convertAvatarToObject from "../../components/utility/ConvertAvatar";
import PageLayout from "../../components/templates/PageTemplate";
import {
    Modal,
    ModalOverlay,
    ModalContent,
  } from '@chakra-ui/react'
import RegisterUser from "../RegisterUser/RegisterUser";

const ClientPageList =  () => {

    const user = useLoaderData();
    const modifiedUsers = user.map(user => convertAvatarToObject(user));
    const [showModal, setShowModal] = useState(false)

    return (
        <PageLayout iconName='FaUserPlus' buttonText='Add' onClick={()=>{}} showButton title={'Clients'}>
            <ClientList data={modifiedUsers}/>
            {showModal && (
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <ModalOverlay>
                        <ModalContent>
                                <RegisterUser onSubmit={() => {}}></RegisterUser>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
            )}
        </PageLayout>
    )
};

export default ClientPageList;