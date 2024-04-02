import styled from "styled-components";

const Text = styled.p`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => {
    const { size, variant } = props;
    const fontSizeVariant = variant === 'display' ? 'display' : 'text';
    return props.theme.font[fontSizeVariant][size] || '1rem';
  }};
  color: ${props => props.theme.colors[props.color] || 'inherit'};
  font-weight: ${props => props.theme.font.weight[props.weight] || 'normal'};
  margin-top: ${props => props.theme.margin[props.marginTop] || '0'};
  margin-bottom: ${props => props.theme.margin[props.marginBottom] || '0'};
  margin-left: ${props => props.theme.margin[props.marginLeft] || '0'};
  margin-right: ${props => props.theme.margin[props.marginRight] || '0'};
  text-transform: ${props => props.theme.font.styles[props.styles] || 'inherit'};
  letter-spacing: 0.8px;
  line-height: inherit;
  text-align: ${props => props.align || 'inherit'} ;
  text-overflow: ${props => props.truncate || 'inherit'};
  overflow: ${props => props.overflow || 'inherit'};
`;

export default Text;