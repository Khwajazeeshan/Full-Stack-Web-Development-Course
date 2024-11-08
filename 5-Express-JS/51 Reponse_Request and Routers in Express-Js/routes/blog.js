const express = require('express')
const router = express.Router()

// respond when a GET request is made to the homepage
router.get('/', (req, res) => {
    res.send('Blog page')
})
router.get('/about', (req, res) => {
    res.send('About BLog')
})
router.get('/:slug', (req, res) => {
    res.send(`Fetch API to ${req.params.slug}`)
})
module.exports = router