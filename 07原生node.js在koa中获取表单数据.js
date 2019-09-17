var Koa=require('koa'),
    router=require('koa-router')(),
    views=require('koa-views'),
    common=require('./module/common.js');
var app=new Koa();

//配置模板引擎中间件 --第三方中间件
app.use(views('views',{
    extension:'ejs'  //引用ejs模板引擎，文件后缀名.ejs
}))


router.get('/',async(ctx)=>{
   ctx.body="这是首页";
   await ctx.render('index07');
})
router.get('/news',async(ctx)=>{
   ctx.body="这是新闻页"
})
//接受post提交的数据
router.post('/doAdd',async(ctx)=>{
    //原生node.js在koa中获取表单提交的数据
    var data=await common.getPostData(ctx); //异步
    console.log(data);
    ctx.body=data;
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000);