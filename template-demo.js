//导入模板引擎
const http = require("http");
const template = require("art-template");
const path = require("path");
const server = http.createServer();

server.on("request",(req,res)=>{
    //获取模板路径
    const views = path.join(__dirname,"views","index.art");

    const html = template(views,{
        msg:"我是内容"
    });
    res.writeHeader("200",{"content-type":"text/html;charset=utf-8"});
    res.end(html);
});

server.listen("666",()=>{
    console.log("服务器已启动")
});




