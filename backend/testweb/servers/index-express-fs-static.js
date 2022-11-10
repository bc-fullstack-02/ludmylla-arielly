const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    const content = fs.readFileSync(path.join(__dirname, 'index.js' ))
    console.log(content)
    res.send('hello from server')
})


app.listen(4000, () => {
    console.log('server listem on http://localhosto:4000')
})