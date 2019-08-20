//创建服务器，监听8080
const express =require('express');
var app =express();
app.listen(8080);
//托管静态资源到public
app.use(express.static('public'));

console.log('服务器启动');




