import {Navigate} from 'react-router-dom';
import {IRouterList} from './interface';
import {LoginPage, HomePage, HomePrivate,PageNotFound } from 'Submodules';

export const routerList: IRouterList = {
    public:  [
        {path: '/', element: <HomePage />, isPrivate: false},
        {path: '/home', element: <HomePage />, isPrivate: false},
        {path: '/auth/', element: <LoginPage />, isPrivate: false},
        {path: '/auth/login', element: <LoginPage />, isPrivate: false},
        {path: '*', element: <Navigate to={'/'} replace />, isPrivate: false}
    ],
    private: [
        {path: '/', element: <HomePrivate />, isPrivate: true},
        {path: '/admin', element: <HomePrivate />, isPrivate: true},
        {path: '/admin/', element: <HomePrivate />, isPrivate: true},
        {path: '/404', element: <PageNotFound/>, isPrivate: true},       
        {path: '*', element: <Navigate to={'/404'} replace />, isPrivate: false}
    ]
}