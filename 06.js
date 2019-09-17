var Koa=require('koa'),
    router=require('koa-router')(),
    views=require('koa-views');
var app=new Koa();

//配置模板引擎中间件 --第三方中间件

app.use(views('views',{
    extension:'ejs'  //引用ejs模板引擎，文件后缀名.ejs
}))

/*
app.use(views('views',{
         map:{html:'ejs'}
   })); 
   这样配置也可以,但文件后缀名必须是.html
*/
router.get('/',async(ctx)=>{
    let title="你好,ejs";
    await ctx.render('index',{
        title:title
    });
})
router.get('/news',async(ctx)=>{
   // ctx.body="这是一个新闻";
    let arr=['111','222','333'];
    let content="<h2>这是一个h2</h2>";
    let num=123;
    await ctx.render('news',{
        list:arr,
        content,
        num,
    })
})
//公共的数据放在ctx.state里面，这样在模板的任何地方都可以使用，这个代码应该放在中间件里面
//写一个中间件配置公共的信息
app.use(async(ctx,next)=>{
    ctx.state.userinfo="张三";
    await next();
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000);
