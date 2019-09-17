var Koa=require('koa'),
    router=require('koa-router')(),
    render=require('koa-art-template'),
    path=require('path');
    
var app=new Koa();

render(app,{
    root:path.join(__dirname,'views'), //模板位置
    extname:'.html', //后缀名
    debug:process.env.NODE_ENV !=='production' //是否开启调试
});


router.get('/',async(ctx)=>{
   // ctx.body="首页";
   let list={
       name:'张三',
       h:'<h2>这是一个h2</h2>',
       num:20,
       data:[111,222,333],
   }
    await ctx.render('index',{
        list,
       
    });
})
router.get('/news',async(ctx)=>{
    let list={
        data:[02,04,06,08],
    }
   await ctx.render('news',{
       list,
   });
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000);
