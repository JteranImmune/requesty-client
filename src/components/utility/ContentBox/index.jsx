import styled from "styled-components";
import Flex from "../Flex";

const BoxContainer = styled(Flex)`
  max-width: 1536px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ContentBox = ({...props}) =>{
  return(
    <BoxContainer {...props}></BoxContainer>
  )
}

export default ContentBox;