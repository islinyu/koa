## cookie保存在浏览器客户端
## cookie是存储于访问者的计算机中的变量，可以让我们用同一个浏览器访问同一个域名的时候共享数据
# cookie能干什么
  1. 保存用户信息
   不用http保存的原因在于Http是无状态协议
  2. 浏览器历史纪录
  3. 猜你喜欢的功能
  4. 10天免登录
  5. 多个页面之间的数据传递
  6. cookie实现购物车功能
# koa Cookie的使用
1. koa中设置cookie的值
  ~~~
  ctx.cookies.set(name,value,[options]);

  ~~~
2. koa中获取cookie的值
   ~~~
   ctx.cookies.get('name');
   ~~~
## cookie的基础使用
 * 在cookie中没办法将值设置中文
 * koa中设置中文cookie
  
  ~~~
  用buffer将中文转换为base64编码
    var name = new Buffer('王子').toString('base64');
      console.log(name);
      //adgajhs
  从cookie获取时，再用buffer转换回来
   var data = ctx.cookies.get('name');
   var info = new Buffer(data,'base64').toString();
   console.log(info);     //王子

  ~~~