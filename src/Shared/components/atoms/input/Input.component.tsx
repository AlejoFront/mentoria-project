import { CSSProperties, FC, HTMLInputTypeAttribute } from 'react';
import './input.component.scss';
interface Props {
    type: HTMLInputTypeAttribute;
    id?: string;
    className?: string;
    placeholder?: string;
    value?: string | number;
    name?: string;
    onChange?: any;
    style?: CSSProperties;
}

export const Input: FC<Props> = ({ type, id, className, placeholder, value, name, style, onChange }) => {
    return (
        <input
            type={type}
            id={id}
            className={className}
            placeholder={placeholder}
            value={value}
            name={name}
            style={style}
            onChange={onChange}
            autoComplete='off'
        />
    )
}
