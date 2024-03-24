import styled from "styled-components";

const Box = styled.div`
  display: ${props => props.display || 'block'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  background: ${props => props.theme.colors[props.bg] || 'transparent'};
  box-sizing: border-box;
`;

export default Box;