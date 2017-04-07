
##说明
项目是直接thinkjs new 出来的。
只是加了一个think-cors中间件，开了websocket。

不确定是我的设置问题还是哪里的问题，我发现只要把hook.js里的那一行代码注释掉就正常了，否则无法收到客户端的消息。


Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```
