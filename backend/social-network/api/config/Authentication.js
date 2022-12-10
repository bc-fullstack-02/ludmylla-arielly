const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { User: UserModel } = require('../models')

const TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || '2634d3209b728707236765918773edda'

function authenticateToken (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return next(createError(401))

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403))

    UserModel.findOne(user).populate('profile')
      .then(u => {
        req.user = u
        next()
      })
      .catch(error => next(error))
  })
}

module.exports = authenticateToken
