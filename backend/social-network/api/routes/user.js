const createError = require('http-errors')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const { User, Connection } = require('../models')
const TOKEN_SECRET = '2634d3209b728707236765918773edda'

router
  .route('/')
  .all((req, res, next) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      next()
    })
    .catch(err => next(err)))

  // Lista users
  .get((req, res, next) => Promise.resolve()
    .then(() => User.find({}))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  // cria usuario
  .post((req, res, next) => Promise.resolve()
    .then(() => bcrypt.hash(req.body.password, 10))
    .then((passwordHashed) => new User({ ...req.body, password: passwordHashed }).save())
    .then((data) => res.status(201).json(data))
    .catch(err => next(err)))

router
  .route('/login')

  .post((req, res, next) => Promise.resolve()
    .then(() => User.findOne({ user: req.body.user }))
    .then((user) => user ? bcrypt.compare(req.body.password, user.password) : next(createError(404)))
    .then((passwordHashed) => passwordHashed ? jwt.sign(req.body.user, TOKEN_SECRET) : next(createError(401)))
    .then((acessToken) => res.status(201).json({ acessToken }))
    .catch(err => next(err)))

router
  .param('id', (req, res, next, id) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      next()
    })
    .catch(err => next(err)))
  .route('/:id')

  .get((req, res, next) => Promise.resolve()
    .then(() => User.findById(req.params.id)) /* .populate({ path: 'comments' }) */
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch(err => next(err)))

  .put((req, res, next) => Promise.resolve()
    .then(() => bcrypt.hash(req.body.password, 10))
    .then((passwordHashed) => User.findByIdAndUpdate(req.params.id, { ...req.body, password: passwordHashed, runValidators: true }))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  .delete((req, res, next) => Promise.resolve()
    .then(() => User.deleteOne({ _id: req.params.id }))
    .then((data) => res.status(203).json(data))
    .catch(err => next(err)))

module.exports = router
