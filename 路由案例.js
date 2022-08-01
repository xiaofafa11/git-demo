//导入http模块
const http = require("http");
const url = require("url");

//创建WEB服务器
const server = http.createServer();

server.on("request",(req,res)=>{
    let {pathname} = url.parse(req.url);
    res.writeHeader("200",{
        "Content-Type":"text/html;charset=utf-8"
    });
    if(pathname == "/" || pathname == "/index.html"){

        res.end("欢迎来到首页");
    }else if(pathname == "/list"){
        res.end("欢迎来到列表页");
    }else if(pathname == "/news"){

    }else{
        res.end("抱歉，您访问的页面不存在");
    }
});

server.listen("666",()=>{
    console.log("已开启服务器");
});