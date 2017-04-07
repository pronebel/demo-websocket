/**
 * this file will be loaded before server started
 * you can register middleware
 * https://thinkjs.org/doc/middleware.html
 */

/**
 * 
 * think.middleware('xxx', http => {
 *   
 * })
 * 
 */


import cors from 'think-cors';

think.middleware('cors', cors);