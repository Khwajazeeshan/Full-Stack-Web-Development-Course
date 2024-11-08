const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');// using for ejs 

app.get('/', (req, res) => {
    // for add this title, searchText, arr in index file, Using this syntax in Index File"< % = title % >"
    let title = "Adidas"
    let searchText = "Search Now"
    let arr = ["hey", "hi", 20, 30]
    // using res.render syntax...........
    res.render("index", { title: title, searchText: searchText, arr })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})