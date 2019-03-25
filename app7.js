var express=require('express')
var app = express()
// 路由在express中扮演着极其重要的作用
// 1.路由是不区分大小写的
app.get('/',(req,res)=>{
   res.send('Hello Express.') 
})
// 在路由页面下通过？携带的参数并不会影响路由的选择
// #hash也不会改变对应的路由
app.get('/AbC',(req,res)=>{
   res.send('这个路由参数是不区分大小写的.') 
})
// 2.路由的详细说明
// 2.1 /ab?cd 就代表b可有可无

// app.get('/ab?cd',(req,res)=>{
//   res.send('当前acd+abcd都能进入当前页面')  
// })
// 2.2 /ab+cd 表示 此时b可以有无限个，至少应该有一个b。
// 注意：路由匹配是有先后顺序的，先下手为强！！！
// app.get('/ab+cd',(req,res)=>{
//   res.send('当前可展示前置位/ab，后置位cd,可以匹配任意b个的路由')  
// })
// 2.3 /ab*cd,表示前置位ab，后置位cd，中间任意值。
// app.get('/ab*cd',(req,res)=>{
//    res.send('当前可以匹配任意前置位为ab,后置位为cd的项。') 
// })

// 2.4 /ab(cd)?e此路径路径将匹配/abe和/abcde。

// app.get('/ab(cd)?e', function (req, res) {
//   res.send('ab(cd)?e')
// })
// 2.5正则表达式的匹配
// app.get(/a/, function (req, res) {
//     res.send('匹配任意一个含有a字母的路径')
//   })

//   这条路线的路径将匹配butterfly和dragonfly，但不butterflyman，dragonflyman等。
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
app.listen(5000)
console.log('当前端口为5000')