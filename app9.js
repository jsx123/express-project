var express = require('express')
var app = express()
// 这一步直接注释没事儿。
// var ejs = require('ejs')
// 引入body-parser ,实现表单的post数据截取的。
var bodyParser = require('body-parser')
// 挂载
// urlencoded路径解析器
// bodyParser.urlencoded 用来解析 request 中 body的 urlencoded字符，
//  只支持utf-8的编码的字符,也支持自动的解析gzip和 zlib。
// 返回的对象是一个键值对，
// 当extended为false的时候，键值对中的值就为'String'或'Array'形式，
// 为true的时候，则可为任何数据类型。

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','ejs')

//配置模板引擎的位置
app.set('views','templates') 

// 表单的自我提交与验收

app.get('/',(req,res)=>{
   res.send('Hello Express.') 
})
// 发送表单信息
app.get('/form',(req,res)=>{
   res.render('form') 
})

app.post('/dopost',(req,res)=>{
   console.log('当前数据post成功')
// 因为post的内容信息不能成功显示在浏览器地址栏中，所以我们需要借助插件来实现
// body-parser   
// 使用body-parser非常简单
// 当对应post数据，就使用req.body。
   console.log(req.body)
   res.send('当前数据接收成功。当前账号为：'+req.body.username+',当前密码：'+req.body.password) 
})


app.listen(4000)
console.log('当前端口为4000')