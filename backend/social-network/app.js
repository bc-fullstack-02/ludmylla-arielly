const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
// const createError = require('http-errors');
const helmet = require('helmet')
const cors = require('cors')

// const {PostRouter, CommentRouter } = require('./api/routes')

// const options = Object.assign(defaultOptions, {basedir: __dirname})

// instancia express
const app = express()

app.use(cors())
app.use(helmet())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.use(logger(process.env.NODE_ENV || 'dev'))

// add all routes on a prefix version

module.exports = app
