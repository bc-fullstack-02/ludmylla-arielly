const express = require('express')
const app = express()
const path = require('path')
// const helmet = require('helmet')
const bodyParser = require('body-parser')
const logger = require('morgan')
const createError = require('http-errors')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const pubsub = require('./api/lib/pubsub')
const authenticateToken = require('./api/config/Authentication')

// swagger
const swagerDoc = require('./api/swagger/swagger')
app.use('/api-docs', swaggerUi.serve)
app.use('/api-docs', swaggerUi.setup(swagerDoc))

const { Post, Comment, User, Security, Profile, Feed } = require('./api/routes')
const { Connection } = require('./api/models')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())
// app.use(helmet())

app.use(express.static(path.join(__dirname, 'api/public')))
app.use(pubsub.pub)

const urlencodedMiddleware = bodyParser.urlencoded({ extended: true })
app.use((req, res, next) => (/^multipart\//i.test(req.get('Content-Type'))) ? next() : urlencodedMiddleware(req, res, next))

app.use(bodyParser.json({
  defer: true
}))

app.use(logger('tiny'))

// Connection
app.use((req, res, next) => Promise.resolve()
  .then(() => Connection.then())
  .then(() => next())
  .catch(error => next(error)))

// add all routes on a prefix version
Post.use('/', authenticateToken, Comment)
app.use('/v1/posts', authenticateToken, Post)
app.use('/v1/users', authenticateToken, User)
app.use('/v1/profiles', authenticateToken, Profile)
app.use('/v1/feed', authenticateToken, Feed)
app.use('/v1/security', Security)

// catch all 404 if no middlawre responded
app.use(function (req, res, next) {
  const err = createError(404)
  next(err)
})

/*
app.use(function (error, req, res, next) {
  if (error.name && error.name === 'ValidationError') {
    res.status(406).json(error)
  } else if ((error.status && error.status === 404) || (error.name && error.name === 'CastError')) {
    res.status(404).json({
      url: req.originalUrl,
      error: {
        message: 'Not found'
      }
    })
  } else if (error.code === 11000) {
    res.status(500).json({
      url: req.originalUrl,
      error: {
        message: 'Duplicate key not allowed'
      }
    })
  } else {
    res.status(error.status || 500).json({
      url: req.originalUrl,
      error
    })
  }
})
*/

module.exports = app
