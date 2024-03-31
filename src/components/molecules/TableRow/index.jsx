import React from "react";
import styled from "styled-components";
import TableCell from "../TableCell";
import Input from "../../atoms/Input"
import Flex from "../../utility/Flex";
import { FaPenSquare } from "react-icons/fa";
import UserBox from "../UserBox";
import Badge from '../../atoms/Badge'
import Tag from "../../atoms/Tags";
import Link from "../../atoms/Link";

const TableRowWrapper = styled.tr`
    border-top:${props => props.theme.colors.border};
    background-color: #fff;
        
    &:hover {
        background-color: ${props => props.theme.colors.baseWhite};
    }
`

const TableRow = ({ dataRow, children, isInput }) => {

    if (dataRow && typeof dataRow === 'object' && !Array.isArray(dataRow)) {
        
        const dataRowArray = Object.entries(dataRow);

        const email = dataRowArray.find(([key, _]) => key === "email")?.[1];
        const avatar = dataRowArray.find(([key, _]) => key === "avatar")?.[1];
        const ownerImage = dataRowArray.find(([key, _]) => key === "owner")?.[1];
        const ownerName = dataRowArray.find(([key, _]) => key === "ownerName")?.[1];
        const ownerId = dataRowArray.find(([key, _]) => key === "_id")?.[1];

        return (
            <TableRowWrapper>
                <TableCell padding="0 0.4rem"><Input type={"hidden"} hidden></Input></TableCell>
                    {dataRowArray.map(([key, value], index) => (
                            key === "_id" ? null:
                            key === "avatar" ? null:
                            key === "email" ? null:
                            key === "ownerName" ? null:
                            key === "title" ? <TableCell key={index} truncate="ellipsis" isText><Link to={`/request/${ownerId}`} key={ownerId}>{value}</Link></TableCell>:
                            key === "status" ? <TableCell key={index} isElement><Badge status={value}>{value}</Badge></TableCell>:
                            key === "priority" ? <TableCell key={index} isElement><Tag priority={value}>{value}</Tag></TableCell>:
                            key === "name" ? <TableCell key={index} isElement><UserBox name={value} email={email} avatar={avatar}></UserBox></TableCell>:
                            key === "owner" ? <TableCell key={index} isElement><UserBox name={ownerName} email={email} avatar={ownerImage}></UserBox></TableCell>:
                            <TableCell key={index} isText >{value}</TableCell>
                        ))
                    }
                <TableCell>
                    <Flex gap="normal" padding="0.2rem 0.2rem">
                        <FaPenSquare cursor={"pointer"} />
                        {/* <Icon iconName="FaTrash" size="xsmall" cursor="pointer"></Icon> */}
                    </Flex>
                </TableCell>    
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