const exp = require('constants')
const express = require('express')
const blog = require('./routes/blog') //using routes
const company = require('./routes/company') //using routes

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/company', company)

// get request that can access through URL........
app.get('/', (req, res) => {
    console.log('its a get request');
    res.send('Hello World !')
})

//post request that can be access through html page and use for create new data
app.post('/', (req, res) => {
    console.log('its a post request');
    res.send('Hello World! Post')
})

//Put request that can be access through html page and use for Update Previous data
app.put('/', (req, res) => {
    console.log('its a Put request');
    res.send('Hello World! Put')
})

//Delete request that can be access through html page and use for delete data
app.delete('/', (req, res) => {
    console.log('its a Delete request');
    res.send('Hello World! delete')
})

// Access index file from templates folder using sendFile Syntax...........
app.get('/index', (req, res) => {
    console.log('its a index file');
    res.sendFile('templates/index.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})