import React from "react";
import styled from "styled-components";
import TableCell from "../TableCell";
import Input from "../../atoms/Input"
import Flex from "../../utility/Flex";
import UserBox from "../UserBox";
import Badge from '../../atoms/Badge'
import Tag from "../../atoms/Tags";
import Link from "../../atoms/Link";
import Icon from "../../atoms/Icon";
import requestService from "../../../services/request.service";
import { useNavigate } from "react-router-dom"
import { useToast } from "@chakra-ui/react"

const TableRowWrapper = styled.tr`
    border-top:${props => props.theme.colors.border};
    background-color: #fff;
        
    &:hover {
        background-color: ${props => props.theme.colors.baseWhite};
    }
`



const TableRow = ({ dataRow, children, isInput }) => {

    const toast = useToast()
    const navigate = useNavigate()

    const deleteSingleRequest = async () =>{

        try {
            const deleteRequest = await requestService.deleteOneRequest(dataRow._id);

            navigate(`/`)

            toast({
                title: "Request deletetd.",
                description: "You have deteleted the request successfully!",
                status: "success",
                duration: 4000,
                isClosable: true,
            })

            return deleteRequest;
            
    
        } catch (error) {
            console.log(error)
        }
    };

    if (dataRow && typeof dataRow === 'object' && !Array.isArray(dataRow)) {
        
        const dataRowArray = Object.entries(dataRow);

        const email = dataRowArray.find(([key, _]) => key === "email")?.[1];
        const avatar = dataRowArray.find(([key, _]) => key === "avatar")?.[1]?.[0];
        const ownerImage = dataRowArray.find(([key, _]) => key === "owner")?.[1];
        const ownerName = dataRowArray.find(([key, _]) => key === "ownerName")?.[1];
        const requestId = dataRowArray.find(([key, _]) => key === "_id")?.[1];

        return (
            <TableRowWrapper>
                <TableCell padding="0 0.4rem"><Input type={"text"}></Input></TableCell>
                    {dataRowArray.map(([key, value], index) => (
                            key === "_id" ? null:
                            key === "avatar" ? null:
                            key === "email" ? null:
                            key === "ownerName" ? null:
                            key === "title" ? <TableCell key={index} truncate="ellipsis" isText><Link to={`/requests/${requestId}`} key={requestId}>{value}</Link></TableCell>:
                            key === "status" ? <TableCell key={index} isElement><Badge status={value}>{value}</Badge></TableCell>:
                            key === "priority" ? <TableCell key={index} isElement><Tag priority={value}>{value}</Tag></TableCell>:
                            key === "owner" ? <TableCell key={index} isElement><UserBox name={ownerName} email={email} avatar={ownerImage}></UserBox></TableCell>:
                            key === "name" ? <TableCell key={index} isElement><UserBox name={value} email={email} avatar={avatar}></UserBox></TableCell>:
                            <TableCell key={index} isText>{value}</TableCell>
                        ))
                    }
               {!dataRow.name ?  <TableCell isElement>
                    <Flex gap="normal" padding="0.2rem 0.2rem">
                        <Link to={`/requests/edit/${requestId}`}>
                            <Icon iconName='FaEdit' cursor="pointer"></Icon>
                        </Link>
                        <Icon iconName="FaTrash" size="small" cursor="pointer" onClick={deleteSingleRequest}></Icon>
                    </Flex>
                </TableCell> :  <TableCell padding="0 0.4rem"></TableCell> }    
            </TableRowWrapper>
        );
    }

    return (
        <TableRowWrapper>
            {children}
        </TableRowWrapper>
    );
};

export default TableRow;