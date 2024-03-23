import styled from 'styled-components';
import Input from '../../atoms/Input';
import Icon from '../../atoms/Icon';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.375rem;
  align-self: stretch;
`;

const InputWithIcon = ({ iconName, ...inputProps }) => (
  <InputWrapper>
    <Icon iconName={iconName} />
    <Input {...inputProps} />
  </InputWrapper>
);

export default  InputWithIcon;
