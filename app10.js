var express = require('express')
var app = express()

app.set('view engine','ejs')
app.set('views','templates')

app.get('/',(req,res)=>{
  res.render('form1')  
})
app.get('/get1',(req,res)=>{
  //当我们是get请求数据就用req.query 
  console.log(req.query) 
  res.send('当前账号：'+req.query.username+',当前密码：'+req.query.password) 
})
app.listen(3000)
console.log('port:3000')
console.log(1234567890)
console.log(1234567890)
console.log(1234567890)