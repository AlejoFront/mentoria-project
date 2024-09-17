import { FC, MouseEventHandler } from 'react';
import './button.component.scss'
interface Props {
    component: TButton;
    text: string;
    href?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}
type TButton = 'a' | 'button';

export const Button: FC<Props> = ({ component, text, href, className, type, onClick, disabled }) => {
    return (
        <>
            {
                component === 'a' &&
                <a href={href} className={className}>{text}</a>
            }
            {
                component === 'button' &&
                <button
                    className={className}
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {text}
                </button>
            }
        </>
    )
}

export default Button