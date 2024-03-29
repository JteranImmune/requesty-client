import styled from "styled-components";

const Badge = styled.div`
    display: flex;
    padding: ${({theme}) => theme.padding.xsmall} ${({theme}) => theme.padding.medium};
    width: fit-content;
    font-size: ${({theme}) => theme.font.text.sm};
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    text-transform: capitalize;
    background-color: ${props => {
    switch (props.status) {
      case 'submitted':
        return props.theme.colors.status.submitted; 
      case 'in progress':
        return props.theme.colors.status.inProgress; 
      case 'completed':
        return props.theme.colors.status.completed; 
      case 'on hold':
        return props.theme.colors.status.onHold; 
      default:
        return '#ccc'; 
    }
  }};
    color: ${props => {
    switch (props.status) {
      case 'submitted':
        return props.theme.colors.status.submittedText; 
      case 'in progress':
        return props.theme.colors.status.inProgressText; 
      case 'completed':
        return props.theme.colors.status.completedText; 
      case 'on hold':
        return props.theme.colors.status.onHoldText; 
      default:
        return '#ccc'; 
    }
  } 
};
`

export default Badge;