/*
 *这里代码汉字转换有问题 
 * 
 */
var Koa=require('koa'),
    router=require('koa-router')(),
    render=require('koa-art-template'),
    path=require('path'),
    
var app=new Koa();

render(app,{
    root:path.join(__dirname,'views'), //模板位置
    extname:'.html', //后缀名
    debug:process.env.NODE_ENV !=='production' //是否开启调试
});


router.get('/',async(ctx)=>{
   // ctx.body="首页";
   //cookie正常就这样配置可以使用了
   /*
    配置其他参数
   */
  var name = new Buffer('王子').toString('base64');
   ctx.cookies.set('userinfo','name',{
       maxAge:60*1000*60,
      
      // path:'/news', 配置可以访问的页面
       //domain:' ',  //正常情况下不要设置，默认情况是当前域下面的所有页面都可以访问
       //secure:'', 正常情况下不要设置，默认情况是false，设置成true表示只有Http可以访问
       httpOnly:false,
      // httpOnly:true true表示这个cookie只有服务器可以访问，false表示客户端（js),服务端都可以访问
   });
   let list={
       name:'张三',
      
   }
    await ctx.render('index',{
        list,
       
    });
})
router.get('/news',async(ctx)=>{
    
    let list={
       name:"张三",
    }
   await ctx.render('news',{
       list,
   });
})
router.get('/shop',async(ctx)=>{
    var name=ctx.cookies.get('name');
    var info = new Buffer(name,'base64').toString();
    ctx.body='这是一个商品页面'+info;
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000);
