// 更改ejs模板的位置
var express = require('express')
var app = express()
// ejs引擎
var ejs= require('ejs')
// 挂载模板引擎
app.set('view engine','ejs')
// 改变模板引擎位置
// 参数1:当前的views路径
// 参数2：新设置的路径
app.set('views','templates')
app.get('/',(req,res)=>{
  res.send('Hello express') 
   
})

app.get('/web',(req,res)=>{
    res.render('web')
//    一旦你设置了新的ejs引擎位置，那么老的位置就时效了
    // res.render('web1')  
})
app.listen(3000)
console.log('当前端口3000')