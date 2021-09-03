const express = require('express')
const app = express()
const path = require('path')

//配置静态目录
app.use(express.static(path.join(__dirname, 'node_modules/tuyoung/dist')))

app.get('/', (req, res) => {
    res.send('欢迎来到大冰的资源网')
})

app.listen(1114, () => {
    console.log('127.0.0.1:1114')
})