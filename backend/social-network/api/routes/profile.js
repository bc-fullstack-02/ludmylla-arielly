const createError = require('http-errors')
const express = require('express')
const router = express.Router()
const { Profile, Connection } = require('../models')

router
  .route('/')

  .get((req, res, next) => Promise.resolve()
    .then(() => Profile.find({}))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err))
  )

router
  .route('/search')

  .get((req, res, next) => Promise.resolve()
    .then(() => Profile.find({ $text: { $search: `${req.query.q}` } }, { score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } }))
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch((err) => next(err)))

router
  .route('/:id')

  .get((req, res, next) => Promise.resolve()
    .then(() => Profile.findById(req.params.id).populate(['following', 'followers']))
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch((err) => next(err)))

router
  .param('id', (req, res, next, id) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => next())
    .catch((err) => next(err)))

  .route('/:id/follow')

  .post((req, res, next) => Promise.resolve()
    .then(() => Profile.findOneAndUpdate({ _id: req.params.id }, { $push: { followers: req.user.profile._id } }, { new: true }))
    .then(() => Profile.findOneAndUpdate({ _id: req.user.profile._id }, { $push: { following: req.params.id } }, { new: true }))
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch(err => next(err)))

router
  .param('id', (req, res, next, id) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => next())
    .catch((err) => next(err)))

  .route('/:id/unfollow')

  .post((req, res, next) => Promise.resolve()
    .then(() => Profile.findOneAndUpdate({ _id: req.params.id }, { $pull: { followers: req.user.profile._id } }, { new: true }))
    .then(() => Profile.findOneAndUpdate({ _id: req.user.profile._id }, { $pull: { following: req.params.id } }, { new: true }))
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch(err => next(err)))

module.exports = router
