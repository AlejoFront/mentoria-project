import {lazy} from 'react';
import {IRouterList} from './interface';
import { PageNotFound } from 'submodules';

const LazyPublicHome = lazy(() => import('submodules/public/pages/home/home.page'));
const LazyPublicLogin = lazy(() => import('submodules/auth/pages/login/login.page'));
const LazyPublicRegister = lazy(() => import('submodules/auth/pages/register/register.page'));

const LazyPrivateHome = lazy(() => import('submodules/admin/pages/home/homePrivate.page'));
const LazyPrivateProfile = lazy(() => import('submodules/admin/pages/profile/profilePrivate.page'));


export const routerList: IRouterList = {
    public: [
        { enabled: true, to: '/', path: '', Component: LazyPublicHome, isPrivate: false },
        { enabled: true, to: '/home', path: 'home', Component: LazyPublicHome, isPrivate: false },
        { enabled: true, to: '/auth/', path: 'auth', Component: LazyPublicLogin, isPrivate: false },
        { enabled: true, to: '/auth/login', path: 'auth/login', Component: LazyPublicLogin, isPrivate: false },        
        { enabled: true, to: '/auth/register', path: 'auth/register', Component: LazyPublicRegister, isPrivate: false },
    ],
    private: [
        { enabled: true, classIcon: 'fas fa-home', name: 'home', to: '/', path: '/', Component: LazyPrivateHome, isPrivate: true },
        { enabled: true, classIcon: 'fas fa-home', name: 'home', to: '/home', path: '/home', Component: LazyPrivateHome, isPrivate: true },
        { enabled: true, classIcon: 'fas fa-id-card-alt', name: 'profile', to: '/profile', path: '/profile', Component: LazyPrivateProfile, isPrivate: true },
    ],
    shared: [
        { enabled: true, to: '/404', path: '/page-not-found', Component: PageNotFound, isPrivate: false }
        
    ]
}

// {path: '/admin', element: <HomePrivate />, isPrivate: true},
// {path: '/admin/', element: <HomePrivate />, isPrivate: true},
// {path: '/profile', element: <ProfilePrivate />, isPrivate: true},
// {path: '/profile/', element: <ProfilePrivate />, isPrivate: true},
// {path: '/404', element: <PageNotFound/>, isPrivate: true},       
// {path: '*', element: <Navigate to={'/404'} replace />, isPrivate: false}