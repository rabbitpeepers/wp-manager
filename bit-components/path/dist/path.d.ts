export declare type makeFn = (...args: string[]) => string;
export declare type AppRoute = string;
export declare type ExpressRoute = string;
export declare const MAKE_ROUTE = 0;
export declare const REACH_ROUTES = 1;
export declare const EXPRESS_ROUTE = 2;
export declare type PathItem = [makeFn, AppRoute[], ExpressRoute];
export interface Path {
    login: PathItem;
    postLogin: PathItem;
    dashboard: PathItem;
    about: PathItem;
    instances: PathItem;
    instancesCreate: PathItem;
    domains: PathItem;
    domainsCreate: PathItem;
    profile: PathItem;
    logout: PathItem;
    applicationFailed: PathItem;
    instanceDetails: PathItem;
}
export declare const path: Path;
export declare const makeRoute: (p: PathItem, ...args: string[]) => string;
