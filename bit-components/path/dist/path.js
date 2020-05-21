"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAKE_ROUTE = 0;
exports.REACH_ROUTES = 1;
exports.EXPRESS_ROUTE = 2;
const staticPath = (p) => [
    (() => p),
    [p],
    p,
];
exports.path = {
    login: [
        ((status = '') => `/login/${status}`),
        ['/', 'login', '/login/:status'],
        '/login/:status?',
    ],
    postLogin: staticPath('/post-login'),
    dashboard: staticPath('/dashboard'),
    about: staticPath('/about'),
    instances: staticPath('/instances'),
    instancesCreate: staticPath('/instances/create'),
    domains: staticPath('/domains'),
    domainsCreate: staticPath('/domains/create'),
    profile: staticPath('/profile'),
    logout: staticPath('/logout'),
    applicationFailed: staticPath('/application-failed'),
    instanceDetails: [
        ((id = '') => `/instances/details/${id}`),
        ['/instances/details/:id'],
        '/instances/details/:id',
    ],
};
exports.makeRoute = (p, ...args) => p[exports.MAKE_ROUTE](...args);
