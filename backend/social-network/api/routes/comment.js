// const createError = require('http-errors')
const express = require('express')
const router = express.Router()
const { Comment, Connection, Post } = require('../models')

router
  .param('postId', (req, res, next, id) => Promise.resolve()
    .then(() => {
      res.locals.post = { id }
      next()
    })
    .catch(err => next(err)))

  .route('/:postId/comments')
  .all((req, res, next) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      next()
    })
    .catch(err => next(err))
  )

  // lista todos comentarios da postagem
  .get((req, res, next) => Promise.resolve()
    .then(() => Comment.find({ post: res.locals.post.id }).populate('post'))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  // comenta na postagem
  .post((req, res, next) => Promise.resolve()
    .then(() => new Comment(Object.assign(req.body, { post: res.locals.post.id })).save())
    .then((comment) => Post.findById(comment.post)
      .then(post => Object.assign(post, { comment: [...post.comments, comment._id] }))
      .then(post => Post.findByIdAndUpdate(comment.post, post))
      .then(() => comment)
    )
    .then((data) => res.status(201).json(data))
    .catch(err => next(err)))

router
  .param('id', (req, res, next, id) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      next()
    })
    .catch(err => next(err)))

  .route('/:postId/comments/:id')

  // busca comentario por id
  .get((req, res, next) => Promise.resolve()
    .then(() => Comment.find({ post: res.locals.post.id }).populate('post'))
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  .put((req, res, next) => Promise.resolve()
    .then(() => Comment.findByIdAndUpdate(req.params.id, req.body, { post: res.locals.post.id, user: req.user_id, runValidators: true }))
    .then((comment) => Post.findById(comment.post)
      .then(post => Object.assign(post, { comment: [...post.comments, comment._id] }))
      .then(post => Post.findByIdAndUpdate(comment.post, post))
      .then(() => comment)
    )
    .then((data) => res.status(200).json(data))
    .catch(err => next(err)))

  .delete((req, res, next) => Promise.resolve()
    .then(() => Comment.deleteOne({ _id: req.params.id, post: res.locals.post.id }))
    .then((data) => res.status(203).json(data))
    .catch(err => next(err)))

module.exports = router
