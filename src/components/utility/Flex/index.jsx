import styled from "styled-components";
import Box from "../Box";

const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex: ${props => props.flex || '1 0 0'};
  gap: ${props => props.theme.padding[props.gap] || '0'};
  align-self: ${props => props.alignSelf || 'auto'};
  max-width: ${props => props.theme.containers[props.maxWidth] || 'unset'};
  border-radius: ${props => props.borderRadius || '0'};
  overflow:${props => props.overflow || 'inherit'};
  border: ${props => props.border || 'none'};;
`;

export default Flex;