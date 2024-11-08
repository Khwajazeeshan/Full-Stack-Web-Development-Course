const express = require('express')
const app = express()
const port = 3000

const fs = require("fs")
const blog = require('./routes/blog') //using routes

app.use('/blog', blog)

//Middleware 1 -- Loger for our application.........
app.use((req, res, next) => {
    console.log(req.headers);
    fs.appendFileSync("logData.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    next()
})

//Middleware 2.........
app.use((req, res, next) => {
    console.log('m2');
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})