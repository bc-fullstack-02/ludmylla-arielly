const createError = require('http-errors')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { User, Profile } = require('../models')
const TOKEN_SECRET = '2634d3209b728707236765918773edda'

router
  .route('/login')

  // login user
  .post((req, res, next) => Promise.resolve()
    .then(() => User.findOne({ user: req.body.user }))
    .then((user) => user ? { passwordHashed: bcrypt.compare(req.body.password, user.password), user } : next(createError(404)))
    .then(({ user, passwordHashed }) => passwordHashed ? jwt.sign(JSON.stringify(user), TOKEN_SECRET) : next(createError(401)))
    .then((accessToken) => accessToken ? res.status(201).json({ accessToken }) : next(createError))
    .catch(err => next(err)))

router
  .route('/register')

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
