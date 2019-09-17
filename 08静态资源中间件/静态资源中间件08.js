var Koa=require('koa'),
    router=require('koa-router')(),
    views=require('koa-views'),
    bodyParser=require('koa-bodyparser'),
    static=require('koa-static');
var app=new Koa();

//配置模板引擎中间件 --第三方中间件
app.use(views('views',{
    extension:'ejs'  //引用ejs模板引擎，文件后缀名.ejs
}))

//配置post bodyParser的中间件
app.use(bodyParser());
//配置web服务的静态资源中间件
app.use(static('./static'));
router.get('/',async(ctx)=>{
   
   await ctx.render('index');
})
router.get('/news',async(ctx)=>{
   ctx.body="这是新闻页"
})

router.post('/doAdd',async(ctx)=>{
    ctx.body=ctx.request.body;
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000);