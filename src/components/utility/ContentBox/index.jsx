import styled from "styled-components";
import Flex from "../Flex";

const BoxContainer = styled(Flex)`
  max-width:  ${props => props.theme.containers[props.container] || "calc(100% - 5rem)"};
  display:  ${props => props.display || "block"};;
  margin-left: auto;
  margin-right: auto;
`;

const ContentBox = ({...props}) =>{
  return(
    <BoxContainer {...props}></BoxContainer>
  )
}

export default ContentBox;