var express= require('express')
var app = express()
// 配置静态资源存储文档
// app.use(express.static(__dirname+'/public'))
// 1.修改静态资源
// app.use(express.static(__dirname+'/assets'))
// 2.动态修改目录路径
// 相当于你之前是在public下配置的文件，改了一下目录名，
// 参数一：自定义路径
// 参数二：实际路径
 app.use('/assets1111',express.static(__dirname+'/public'))
// 反向设置
app.use('/public',express.static(__dirname+'/assets')) 
app.get('/',(req,res)=>{
   res.send('Hello Express.') 
})
app.get('/beauty',(req,res)=>{
   //只要上面配置了相关的静态资源路径，在下面写入的时候是可以省略路径。 
//    res.send('<img src="./15524636899904.jpg" alt="此图片无法显示" />')  

res.send('<img src="/public/1.jpg" alt="此图片无法显示" />') 
})

app.listen(3000)
