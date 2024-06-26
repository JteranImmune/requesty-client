import { theme } from "@chakra-ui/react";
import styled from "styled-components";

const Divider = styled.hr`
    border: 0;
    height: 0;
    margin: ${props => props.theme.margin[props.margin]} 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
`;

export default Divider;