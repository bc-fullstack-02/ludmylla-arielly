const createError = require('http-errors')
const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const { User, Profile, Connection } = require('../models')

router
  .route('/')
  .all((req, res, next) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => { next() })
    .catch(err => next(err)))

router
  .param('id', (req, res, next, id) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => next())
    .catch(err => next(err)))

  .route('/me')

  // Search user by id
  .get((req, res, next) => Promise.resolve()
    .then(() => User.findById(req.user.id))
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch(err => next(err)))

  // update user
  .put((req, res, next) => Promise.resolve()
    .then(() => bcrypt.hash(req.body.password, 10))
    .then((passwordHashed) => User.findByIdAndUpdate(req.user.id, req.body, { runValidators: true, new: true }))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  // delete user
  .delete((req, res, next) => Promise.resolve()
    .then(() => Profile.deleteOne({ _id: req.user.profile._id }))
    .then(() => User.deleteOne({ _id: req.user.id }))
    .then((data) => data ? res.status(203).json(data) : next(createError(404)))
    .catch(err => next(err)))

module.exports = router
