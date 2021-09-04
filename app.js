const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')


// 引用引擎
app.engine('html', ejs.__express)

//设置引擎
app.set('view engine', 'html')

//配置静态目录
app.use(express.static(path.join(__dirname, 'node_modules/tuyoung/dist')))

app.get('/', (req, res) => {
    res.render('index.html')
})



app.listen(1114, () => {
    console.log('127.0.0.1:1114')
})