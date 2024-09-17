import styled from 'styled-components';
interface Props {
    alert: 'warn' | 'dan' | 'succ';
    mrb?: string;
}
const MessageContainer = styled.div<Props>`
    width: 100%;
    background: ${props => props.alert === 'warn' ? '#fff3cd' : props.alert === 'dan' ? '#f8d7da' : props.alert === 'succ' && '#d4edda'};
    color: ${props => props.alert === 'warn' ? '#856404' : props.alert === 'dan' ? '#7f2e36' : props.alert === 'succ' && '#155724'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: .75rem 1.25rem;
    margin-bottom: ${props => props.mrb ? props.mrb : '5%'};
    span {
        text-align: center;
        font-size: 18px;
    }
`;



export {
    MessageContainer
}