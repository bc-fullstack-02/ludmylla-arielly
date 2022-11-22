const createError = require('http-errors')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { User, Profile, Connection } = require('../models')
const TOKEN_SECRET = '2634d3209b728707236765918773edda'

router
  .all((req, res, next) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => next())
    .catch(err => next(err))
  )

  .route('/login')

  // login user
  .post((req, res, next) => Promise.resolve()
    .then(() => User.findOne({ user: req.body.user }))
    .then((user) => user ? bcrypt.compare(req.body.password, user.password) : next(createError(404)))
    .then((passwordHashed) => passwordHashed ? jwt.sign(req.body.user, TOKEN_SECRET) : next(createError(401)))
    .then((acessToken) => res.status(201).json({ acessToken }))
    .catch(err => next(err)))

router
  .route('/register')
  .all((req, res, next) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => next())
    .catch(err => next(err)))

  // cria usuario
  .post((req, res, next) => Promise.resolve()
    .then(() => bcrypt.hash(req.body.password, 10))
    .then((passwordHashed) => new User({ ...req.body, password: passwordHashed }).save())
    .then(user => new Profile({ name: req.body.name || req.body.user, user: user._id }).save()
      .then(profile => User.findByIdAndUpdate(user._id, { profile }))
    )
    .then((data) => res.status(201).json(data))
    .catch(err => next(err)))

module.exports = router
