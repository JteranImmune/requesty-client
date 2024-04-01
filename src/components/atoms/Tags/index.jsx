import styled from "styled-components";

const Tag = styled.div`
    display: flex;
    padding: ${({theme}) => theme.padding.xsmall} ${({theme}) => theme.padding.medium};
    width: fit-content;
    font-size: ${({theme}) => theme.font.text.sm};
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    text-transform: capitalize;
    font-weight: 600;
    color: ${props => {
    switch (props.priority) {
      case 'High':
        return props.theme.colors.priority.highText; 
      case 'Low':
        return props.theme.colors.priority.lowText; 
      case 'Medium':
        return props.theme.colors.priority.mediumText; 
      default:
        return '#ccc'; 
    }
  }};
    background-color: ${props => {
    switch (props.priority) {
      case 'High':
        return props.theme.colors.priority.high; 
      case 'Low':
        return props.theme.colors.priority.low; 
      case 'Medium':
          return props.theme.colors.priority.medium; 
      default:
        return '#ccc'; 
    }
  } 
};
`

export default Tag;