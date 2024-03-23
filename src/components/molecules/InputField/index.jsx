import styled from 'styled-components';
import Input from '../../atoms/Input';
import Label from '../../atoms/Labels';
import Text from '../../atoms/Text';

const InputBox = styled.div`
    display: flex;
    width: 20rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.375rem;
`
const ErrorMessage = styled(Text)`
    color: ${props => props.theme.colors.error};
`;

const InputField = ({label, name, errorMsg, ...rest}) => (
    <InputBox>
        <Label htmlFor={name}><Text size="md" weight="medium" >{label}</Text></Label>
        <Input id={name} name={name} {...rest} />
        {errorMsg && <ErrorMessage id={`${name}-error`}>{errorMsg}</ErrorMessage>}
    </InputBox>
);

export default InputField;

