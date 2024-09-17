import {LazyExoticComponent} from 'react';
import {LazyRouteFunction, RouteObject} from 'react-router-dom';
export type JSXComponent= () => JSX.Element;
export interface IRouterList {
    public: IRouter[];
    private: IRouter[];
    shared: IRouter[];
}


export interface IRouter{
    to: string;
    path:string;
    className?:string;
    classIcon?: string;
    classLink?:string;
    icon?:string;
    lazy?: LazyRouteFunction<RouteObject>;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name?:string;
    isPrivate: boolean;
    enabled: boolean;
}