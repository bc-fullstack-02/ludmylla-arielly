const path = require('path')
const express = require('express')
const app = express()

app.use('/', express.static(path.join(__dirname, 'index.html')))

app.listen(4000, () => {
    console.log('server listem on http://localhosto:4000')
})