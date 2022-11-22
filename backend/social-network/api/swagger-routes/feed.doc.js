const getFeed = {
  tags: ['feed'],
  description: 'List all feed',
  summary: 'list all feed',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object'
          }
        }
      }
    }
  }
}

const feedRouteDoc = {
  '/feed': {
    get: getFeed
  }
}

module.exports = feedRouteDoc
