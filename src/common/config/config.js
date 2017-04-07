'use strict';
/**
 * config
 */
export default {
  //key: value
    port : 6067,
    encoding: "utf-8", //项目编码
    hook_on: true, //是否开启 hook
    timeout: 10,
    cors:{
        origin:"*",                         //Access-Control-Allow-Origin
        methods:"*",                 //Access-Control-Allow-Methods
        credentials:true,                   //Access-Control-Allow-Credentials
        allowedHeaders:"GET,HEAD,PUT,PATCH,POST,DELETE",     //Access-Control-Allow-Headers
        maxAge:1000,                        //Access-Control-Max-Age  for the OPTIONS request
        preflightContinue:true              // for the OPTIONS request
    }
};