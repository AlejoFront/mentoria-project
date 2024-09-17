import { FC, ReactNode } from 'react'
import './item.component.scss'
interface IProps {
    text?: string;
    className?: string;
    children?: ReactNode | ReactNode[];
    handleClick?: any;
}
export const Item: FC<IProps> = ({ children, className, text, handleClick }) => {
    return (
        <i onClick={handleClick} className={className}>{children ? children : text}</i>
    )
}

export default Item