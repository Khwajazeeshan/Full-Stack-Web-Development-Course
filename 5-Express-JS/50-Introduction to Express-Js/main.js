const express = require('express')
const app = express()
const port = 3000

//static can public the folder for users....................
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete (path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About me!')
})
// Usig "slug" syntax ...................
app.get('/about/:Slug/:second', (req, res) => {
    //for URL: http://localhost:3000/about/zeeshan/ali?mode=dark
    console.log(req.params); // Output=> { Slug: 'zeeshan', second: 'ali' }
    console.log(req.query);// Output=> { mode: 'dark' }
    res.send(`Hello \t${req.params.Slug} and ${req.params.second}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})