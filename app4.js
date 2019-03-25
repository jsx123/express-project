// 在地址栏传参是一种常见的需求
// 我们可以通过正则表达式的形式进行传参
var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    // 在路由配置中建议你使用res.send(),因为它已经内置了请求头信息了。
  res.send('这是web教研室')

  //res.end()如果不加请求头是会出现中文乱码的。
//   res.writeHead(200,{'Content-type':'text/html;charset=UTF-8;'}) 
//   res.end('这是web教研室')
})

// 请求路径为/student/:id,
// 当你传递的id信息为多少时，那么展示在页面的信息就为多少。
// id参数被要求为五位数字有效值
app.get(/^\/student\/([\d]{5})$/,(req,res)=>{
 //打印地址栏信息
//  req.params
  console.log(req.params)
  //根据学院id判断学员成绩    
  if(Number(req.params[0])>=30000){
    res.send('当前学员的id：'+req.params[0]+',她(他)的成绩为：差')
  }else if(Number(req.params[0])>=20000){
    res.send('当前学员的id：'+req.params[0]+',她(他)的成绩为：中等')
  }else if(Number(req.params[0])>=15000){
    res.send('当前学员的id：'+req.params[0]+',她(他)的成绩为：良好')
  }else{
    res.send('当前学员的id：'+req.params[0]+',她(他)的成绩为：优秀')  
  }  
  res.send('请求成功')
})

app.listen(8000)
console.log('当前的端口为8000')