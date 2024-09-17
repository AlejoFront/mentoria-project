import { FC } from 'react';
import { MessageContainer } from 'shared/elements';
import './messageAlert.component.scss';
interface Props {
    alert: 'warn' | 'dan' | 'succ';
    msg?: string | undefined;
    mrb?: string;
}
export const MessageAlert: FC<Props> = ({ alert, msg, mrb }) => {
    return (
        <MessageContainer alert={alert} mrb={mrb}>
            <span>{msg}</span>
        </MessageContainer>
    )
}

export default MessageAlert