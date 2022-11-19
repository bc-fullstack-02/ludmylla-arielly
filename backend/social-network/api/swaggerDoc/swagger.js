const postRouteDoc = require('../routes/posts.doc')
const userRouteDoc = require('../routes/users.doc')
const commentRouteDoc = require('../routes/comment.doc')

const swaggerDoc = {
  openapi: '3.0.0',
  info: {
    description: 'Desafio bootcamp full-stack da Sysmap',
    title: 'Social Network',
    version: '1.0'
  },

  servers: [
    {
      url: 'http://localhost:3000/v1',
      description: 'Local'
    }
  ],
  tags: [
    {
      name: 'posts',
      description: 'Posts routes'
    },
    {
      name: 'users',
      description: 'Users routes'
    },
    {
      name: 'comments',
      description: 'Comment routes'
    }
  ],

  paths: {
    ...postRouteDoc,
    ...userRouteDoc,
    ...commentRouteDoc
  }
}

module.exports = swaggerDoc
