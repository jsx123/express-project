// 什么是ejs？
// ejs是一个高效的js模板引擎
// 有点类似于php中模板插值
// 主要是为了实现业务逻辑与页面应用相互分离的效果
// 我们可以渲染普通的字符串插值，也可以进行xxx.ejs模板渲染插值
// ejs这个模板引擎是需要依赖express框架的，并且也是需要下载的
// 下载方式： npm i ejs --save
// 使用方式： ejs.render()
// 引入express框架
var express = require('express')
// 调用express框架的方法
var app = express()
// 使ejs挂载在express框架上
// app.set()express的配置项
// view engine模板引擎
// ejs配置为ejs
app.set('view engine','ejs')
var ejs = require('ejs')


// 1. 渲染普通的字符串插值
// 写入模板插值
// var string = 'Hello <%= name %>,<%= className %>.'
// var obj ={
//   name:'ejs',
//   className:'chengdu-web1224'  
// }

// var obj1 = {
//    name:'express',
//    className:'Ujiuye' 
// }
// app.get('/',(req,res)=>{
//   //ejs.render(string,obj)
// //   string代表想要渲染的字符串
// //  obj表示跟随的信息变量 
//   var html = ejs.render(string,obj1)
//   console.log(html)
//   res.end(html)
// })


// 2.进行xxx.ejs模板渲染插值

// 默认的ejs模板都会被默认渲染在views文件夹
var obj = {
    num: 40,
    arr1:[1,2,3,4],
    obj:{
      name:'jsx',
      sex:'man',
      age:18  
    }
}

app.get('/',(req,res)=>{
// res.render('index',obj)
// index.ejs的模板文件，省略了后缀ejs
// obj代表依赖的数据  
  res.render('index',obj)
})

app.listen(3000)
console.log('当前端口为3000')

