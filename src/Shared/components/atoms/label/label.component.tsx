import { FC } from 'react';
import './label.component.scss';
interface Props {
    text?: string;
    htmlFor?: string;
    className?: string;
    children?: React.ReactNode;
}

export const Label: FC<Props> = ({ children, htmlFor, text, className }) => {

    return (
        <label className={className} htmlFor={htmlFor}>
            {!!children ? children : text}
        </label>
    )
}
