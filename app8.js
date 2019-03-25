var express = require('express')
var app = express()
// 今天上午我们所说的是正则匹配的传参
// 今天下午我们说一下冒号匹配法
app.get('/',(req,res)=>{
  res.send('Hello express.')  
})
// 通过：id的形式动态传参，通过req.params来动态获取参数，进行有效渲染。
app.get('/teacher/:id',(req,res)=>{
    console.log(req.params['id'])
    var id= req.params['id']
     
    // 如果有任务需要加入id的限制：为5位数字
    var reg = /^[\d]{5}$/
    // 匹配正则表达式
    if(reg.test(id)){
        res.send('当前教师工号为:'+id)   
    }else{
       res.send('当前教师的工号错误。') 
    }
    
})

app.listen(3000)
console.log('当前页面为3000')