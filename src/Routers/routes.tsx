import {lazy} from 'react';
import {IRouterList} from './interface';
import { PageNotFound } from 'Submodules';

const LazyPublicHome = lazy(() => import('Submodules/public/pages/home/home.page'));
const LazyPublicLogin = lazy(() => import('Submodules/auth/pages/login/login.page'));


const LazyPrivateHome = lazy(() => import('Submodules/admin/pages/home/homePrivate.page'));
const LazyPrivateProfile = lazy(() => import('Submodules/admin/pages/profile/profilePrivate.page'));


export const routerList: IRouterList = {
    public: [
        { to: '/', path: '', Component: LazyPublicHome, isPrivate: false },
        { to: '/home', path: 'home', Component: LazyPublicHome, isPrivate: false },
        { to: '/auth/', path: 'auth', Component: LazyPublicLogin, isPrivate: false },
        { to: '/auth/login', path: 'auth/login', Component: LazyPublicLogin, isPrivate: false },
    ],
    private: [
        { to: '/', path: '/', Component: LazyPrivateHome, isPrivate: true },
        { to: '/home', path: '/home', Component: LazyPrivateHome, isPrivate: true },
        { to: '/profile', path: '/profile', Component: LazyPrivateProfile, isPrivate: true },
    ],
    shared: [
        { to: '/404', path: '/page-not-found', Component: PageNotFound, isPrivate: false }
        
    ]
}

// {path: '/admin', element: <HomePrivate />, isPrivate: true},
// {path: '/admin/', element: <HomePrivate />, isPrivate: true},
// {path: '/profile', element: <ProfilePrivate />, isPrivate: true},
// {path: '/profile/', element: <ProfilePrivate />, isPrivate: true},
// {path: '/404', element: <PageNotFound/>, isPrivate: true},       
// {path: '*', element: <Navigate to={'/404'} replace />, isPrivate: false}