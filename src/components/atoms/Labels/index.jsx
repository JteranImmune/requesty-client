import styled from "styled-components";

const Label = styled.label`
  display: block; 
  margin-bottom: 0.5rem; 
  font-size: 14px; 
  color: ${props => props.theme.colors.textColorLight}; 
`;

export default Label;