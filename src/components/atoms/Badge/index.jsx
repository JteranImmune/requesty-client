import styled, { css } from "styled-components";

const Badge = styled.div`
    display: flex;
    padding: 0.25rem 0.75rem;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    background-color: ${props => {
    switch (props.status) {
      case 'submitted':
        return props.theme.colors.submitted; // Replace with your theme color or hex code
      case 'in progress':
        return props.theme.colors.inProgress; // Replace with your theme color or hex code
      case 'completed':
        return props.theme.colors.completed; // Replace with your theme color or hex code
      case 'on hold':
        return props.theme.colors.onHold; // Replace with your theme color or hex code
      default:
        return '#ccc'; // Default color if none of the conditions are met
    }
  }};
    color: ${props => {
    switch (props.status) {
      case 'submitted':
        return props.theme.colors.submittedText; // Replace with your theme color or hex code
      case 'in progress':
        return props.theme.colors.inProgressText; // Replace with your theme color or hex code
      case 'completed':
        return props.theme.colors.completedText; // Replace with your theme color or hex code
      case 'on hold':
        return props.theme.colors.onHoldText; // Replace with your theme color or hex code
      default:
        return '#ccc'; // Default color if none of the conditions are met
    }
  }};
`

export default Badge;