import styled from "styled-components"

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.75em
  1.5em; /* Use rem for fluid typography */
  text-decoration: none;
  -webkit-touch-callout: none; /* Remove iOS callouts */
  -webkit-user-select: none; /* Remove mobile browser selection */
  &:hover {
    background-color: #f4f4f4;
  }
  &:active {
    background-color: #eaeaea;
  }
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.primaryColor};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 1px 3px rgba(0, 0, 0,  0.2);
  transition: all 0.2s ease-in-out;
`

Button.defaultProps = {
  theme: {
    primaryColor: "#6c9", // A nice shade of blue
    secondaryColor: "#ffd", // Bright yellow!
    textColor: "#fff", // White!
  },
};

export default Button;