import styled from "styled-components";

const Label = styled.label`
  display: block; 
  font-size: ${props => props.theme.font.text.lg}; 
  color: ${props => props.theme.colors.textColorLight}; 
`;

export default Label;