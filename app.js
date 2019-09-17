const koa =require('koa');
const Router =require('koa-router');
//实例话koa
const app =new koa();
const router=new Router();
//配置路由
router.get("/",async ctx=>{
    ctx.body={msg:"hello koa interfaces"};
});

//启动路由

app.use(router.routes()).use(router.allowedMethods());  //启动路由 
const port =process.env.PORT||5000;
//监听
app.listen(port,()=>{
    console.log(`server started on ${port}`);
})

//安装过程中--save表示自动修改package.json文件，自动添加依赖项