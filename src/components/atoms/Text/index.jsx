import styled from "styled-components";

const Text = styled.p`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => {
    const { size, variant } = props;
    const fontSizeVariant = variant === 'display' ? 'display' : 'text';
    return props.theme.font[fontSizeVariant][size] || '1em';
  }};
  color: ${props => props.theme.colors[props.color] || 'inherit'};
  font-weight: ${props => props.theme.font.weight[props.weight] || 'normal'};
  margin-top: ${props => props.theme.margin[props.marginTop] || '0'};
  margin-bottom: ${props => props.theme.margin[props.marginBottom] || '0'};
  margin-left: ${props => props.theme.margin[props.marginLeft] || '0'};
  margin-right: ${props => props.theme.margin[props.marginRight] || '0'};
`;

export default Text;