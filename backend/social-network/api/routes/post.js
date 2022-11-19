const createError = require('http-errors')
const express = require('express')
const router = express.Router()
const { Post, Connection } = require('../models')

router
  .route('/')
  .all((req, res, next) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      next()
    })

    .catch(err => next(err))
  )

  /**
   * @swagger
   * /:
   * get:
   *    summary: This method list all posts
   *    description: This method list all posts
   *    responses:
   *        200:
   *          description: Test get method
  */
  .get((req, res, next) => Promise.resolve()
    .then(() => Post.find({ user: req.user_id }).populate('comments'))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  .post((req, res, next) => Promise.resolve()
    .then(() => new Post({ ...req.body, user: req.user_id }).save())
    .then((data) => res.status(201).json(data))
    .catch(err => next(err)))

router
  .param('id', (req, res, next, id) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      next()
    })
    .catch(err => next(err)))

  .route('/:id')

  // busca postagem por id
  .get((req, res, next) => Promise.resolve()
    .then(() => Post.findById(req.params.id).populate({ path: 'comments' }))
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch(err => next(err)))

  .put((req, res, next) => Promise.resolve()
    .then(() => Post.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  .delete((req, res, next) => Promise.resolve()
    .then(() => Post.deleteOne({ _id: req.params.id }))
    .then((data) => res.status(203).json(data))
    .catch(err => next(err)))

module.exports = router
