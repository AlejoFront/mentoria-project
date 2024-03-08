import {LazyRouteFunction, RouteObject} from 'react-router-dom';
export interface IRouterList {
    public: IRouter[];
    private: IRouter[];
}


export interface IRouter{
    to?: string;
    path:string;
    className?:string;
    classLink?:string;
    icon?:string;
    lazy?: LazyRouteFunction<RouteObject>;
    element?: JSX.Element;
    name?:string;
    isPrivate: boolean;
}