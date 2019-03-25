// 什么是express框架？
// express框架是一个简洁而灵活的nodejs web应用框架，
// 它提供了一系列的强大特性来支持我们通过node去创建各种web应用。
// express它并不是对nodejs已有的特性进行二次抽象，
// 而是在它基础上进行的扩展和强化，包括扩展一些web应用所需的功能
// 我们可以从express框架中看到http创建服务时更简洁，更有效，更强健的写法

// Express框架是后台nodejs的框架，与前端的jQuery，bootstrap相比，都不是一类的框架，所以不可以相提并论。
// Express框架与jQuery一样在后台node中受欢迎，其实在企业里也相当的受欢迎，
// 基本上已经成为了企业的标准化规范了。

// 为什么要使用express？
// 原生node中存在很多的问题，比如：
// 1.递呈静态页面很不方便，需要处理各个http请求，还要考虑304问题以及缓存问题。
// 2.路由的处理代码非常不清晰，
// 通常是用if+else处理或switch+case处理，
// 这种处理方法使路由变得格外混乱，有时候还需要些很多的正则表达式和字符串函数
// 3.不能集中主要精力去写业务，还要考虑诸多额外的因素
// express就内置了很多方法和库，可以自成一套体系，去解决原生node的弊端问题。

// 引入express框架
var express = require('express')
// 调用express框架的方法
var app = express()

app.get('/',(req,res)=>{
   res.write('<h1>1234567890</h1>')
   res.end('Hello express') 
})

app.listen(3000)

console.log('当前端口为3000')