var express = require('express')
var app = express()

// 1.强大的路由功能
// 这时你会发现所有的路由都变成了app.get()
// 但是实际不是get请求，而是express的方法，表示Whenget()
// 监听路由跳转，加载内部字符串
app.get('/',(req,res)=>{
  res.send('Hello express.')  
})

app.get('/web',(req,res)=>{
  res.send('这是web教研室')  
})

app.get('/php',(req,res)=>{
    res.send('这是php教研室')  
})

app.get('/java',(req,res)=>{
res.send('这是java教研室')  
})

app.get('/ui',(req,res)=>{
    res.send('这是ui教研室')  
})

app.listen(8080)
console.log('当前端口为8080')