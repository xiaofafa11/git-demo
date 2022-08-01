//导入第三方路由模块
const http = require("http");
//创建服务器
const server = http.createServer();

//创建路由
const getRouter = require("router");
const router = getRouter();

//客户端请求
server.on("request",(req,res)=>{
    res.writeHeader("200",{"content-type":"text/html;charset=utf-8"});
    router(req,res,()=>{});
});

router.get("/index",(req,res)=>{
    res.end("首页")
});
router.get("/list",(req,res)=>{
    res.end("列表页")
});
router.post("/add",(req,res)=>{
    res.end("添加")
});

server.listen("666",()=>{
    console.log("服务器启动成功")
});

