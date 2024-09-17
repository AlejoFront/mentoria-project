import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './itemLink.component.scss';
interface Props {
    children?: React.ReactNode;
    to: string;
    path: string;
    text?: string;
    className?: string;
}

export const ItemLink: FC<Props> = ({ to, path, children, text, className }) => {
    return (
        <NavLink to={to.includes(':id') ? `${path}` : to} className={className}>
            {!!children ? children : text}
        </NavLink>
    )
}
