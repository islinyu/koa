# session与cookie
## session和cookie都可以实现同一个浏览器的同一个域不同页面之间的数据共享，不同在于cookie保存在浏览器客户端，session保存在服务器上，相比于cookie更安全
# session的工作流程
## 当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似于key,value的键值对，然后将key(cookie)返回到浏览器（客户端），浏览器下次再访问时，携带key(cookie)，找到对应的session(value)。客户的信息都保存在session中
# 
# koa-session的使用:  

1.安装  koa-session


~~~
npm install koa-session --save
~~~

2.引入express-session 

~~~
const session = require('koa-session');
~~~

 3.设置官方文档提供的中间件

~~~
app.keys = ['some secret hurr'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));
~~~


4.使用
~~~
     设置值 ctx.session.username = "张三";
     获取值 ctx.session.username
~~~