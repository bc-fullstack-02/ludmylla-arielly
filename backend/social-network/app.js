const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const createError = require('http-errors')
const helmet = require('helmet')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

// swagger
const swagerDoc = require('./api/swagger/swagger')

// jwt
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = '2634d3209b728707236765918773edda'

const { Post, Comment, User, Security, Profile, Feed } = require('./api/routes')
const { User: UserModel } = require('./api/models')

// instancia express
const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

// swagger
app.use('/api-docs', swaggerUi.serve)
app.use('/api-docs', swaggerUi.setup(swagerDoc))

app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(logger(process.env.NODE_ENV || 'dev'))

function authenticateToken (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return next(createError(401))

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403))

    UserModel.findOne({ user })
      .then(u => {
        req.user = u
        next()
      })
      .catch(error => next(error))
  })
}

// add all routes on a prefix version
Post.use('/', authenticateToken, Comment)
app.use('/v1/posts', authenticateToken, Post)
app.use('/v1/users', authenticateToken, User)
app.use('/v1/profiles', authenticateToken, Profile)
app.use('/v1/feed', authenticateToken, Feed)
app.use('/v1/security', Security)

// pega todos 404 se nenhum middlawre respondeu
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
