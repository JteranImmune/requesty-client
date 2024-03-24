import styled from "styled-components";

const Spacer = styled.div`
  width: ${({ axis, size }) => (axis === 'horizontal' ? size : '1px')};
  height: ${({ axis, size }) => (axis === 'vertical' ? size : '1px')};
  display: ${({ axis }) => (axis === 'horizontal' ? 'inline-block' : 'block')};
`;

export default Spacer;