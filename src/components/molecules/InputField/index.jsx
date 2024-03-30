import styled from 'styled-components';
import Input from '../../atoms/Input';
import Label from '../../atoms/Labels';
import Text from '../../atoms/Text';
import Textarea from '../../atoms/TextArea';

const InputBox = styled.div`
    display: flex;
    width:  ${props => props.maxwidth || '20rem'};
    flex-direction: column;
    align-items: flex-start;
    gap: 0.375rem;
`
const ErrorMessage = styled(Text)`
    color: ${props => props.theme.colors.error};
`;

const InputField = ({label, name, errorMsg, maxwidth, isTextArea, ...rest}) => (
    <InputBox maxwidth={maxwidth}>
        <Label htmlFor={name}>{label}</Label>
        {!isTextArea && <Input id={name} name={name} {...rest} />}
        {isTextArea && <Textarea name={name} {...rest}/>}
        {errorMsg && <ErrorMessage id={`${name}-error`}>{errorMsg}</ErrorMessage>}
    </InputBox>
);

export default InputField;

