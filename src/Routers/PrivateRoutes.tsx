import {FC, ReactNode } from 'react';
import {Navigate} from 'react-router-dom';

interface IProps {
    children: ReactNode | ReactNode[],
    isAuthenticated: boolean;
}

export const PrivateRoutes: FC<IProps> = ({children, isAuthenticated}) => <> {
    isAuthenticated ? children : <Navigate to='/auth/login' />
} </>;

export default PrivateRoutes