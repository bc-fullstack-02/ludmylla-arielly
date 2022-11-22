const postRouteDoc = require('../swagger-routes/posts.doc')
const userRouteDoc = require('../swagger-routes/users.doc')
const commentRouteDoc = require('../swagger-routes/comment.doc')
const securityRouteDoc = require('../swagger-routes/security.doc')
const feedRouteDoc = require('../swagger-routes/feed.doc')
const profileRouteDoc = require('../swagger-routes/profile.doc')

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
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  },
  security: [
    {
      bearerAuth: []
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
    },
    {
      name: 'security',
      description: 'Security routes'
    },
    {
      name: 'feed',
      description: 'Feed routes'
    },
    {
      name: 'profile',
      description: 'Profile routes'
    }
  ],

  paths: {
    ...postRouteDoc,
    ...userRouteDoc,
    ...commentRouteDoc,
    ...securityRouteDoc,
    ...feedRouteDoc,
    ...profileRouteDoc
  }
}

module.exports = swaggerDoc
