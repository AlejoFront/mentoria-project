import {FC, ReactNode } from 'react';
import {Navigate} from 'react-router-dom';

interface IProps {
    children: ReactNode | ReactNode[],
    isAuthenticated: boolean;
}

export const PublicRoutes: FC<IProps> = ({children, isAuthenticated}) => <> {
    isAuthenticated ? <Navigate to='/' /> : children
} </>;

export default PublicRoutes