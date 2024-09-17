import { FC } from 'react';
import { ItemLink, Text } from 'shared/components/atoms'
import './itemNav.component.scss'
interface Props {
    children?: React.ReactNode;
    path: string;
    to: string;
    className?: string;
    classLink?: string;
    text?: string;
}
export const ItemNav: FC<Props> = ({ children, to, path, className, text, classLink }) => {

    return (

        !!children ?
            <ItemLink to={to} path={path} className={className} >{text}</ItemLink>
            :
            <ItemLink to={to} path={path} className={classLink} >
                <Text component='i' className={className} />
                <Text component='span' className='text' text={text} />
            </ItemLink>
    )
}
