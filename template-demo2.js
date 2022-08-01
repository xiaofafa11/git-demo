//导入模板引擎
const http = require("http");
const template = require("art-template");
const path = require("path");
const moment = require("moment");
//创建web服务器
const server = http.createServer();
//设置模板的根目录
template.defaults.root = path.join(__dirname,"views");
//导入模板变量
template.defaults.imports.moment = moment;
//设置模板的默认后缀
template.defaults.extname = ".art";

server.on("request",(req,res)=>{
    const html = template("index",{
        msg:"我是内容",
        time:new Date()
    });
    res.writeHeader("200",{"content-type":"text/html;charset=utf-8"});
    res.end(html);
});
server.listen("666",()=>{
    console.log("服务器启动成功")
});


