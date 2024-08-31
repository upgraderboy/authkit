/**
 * An array of routes that are acessible to the public
 * These routes do not require authentication
 * @types {string[]}
 */
export const publicRoutes = [
    '/'
]
/**
 * An array of routes that are acessible to the public
 * These routes will redirect logged in users to /settings
 * @types {string[]}
 */
export const authRoutes = [
    '/auth/login',
    '/auth/register'
];


/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for  API authentication purposes
 * @types {string}
 */
export const apiAuthPrefix = '/api/auth';
/**
 * The default rdirect path after logging in
 * @types {string}
*/

export const DEFAULT_LOGIN_REDIRECT = '/';