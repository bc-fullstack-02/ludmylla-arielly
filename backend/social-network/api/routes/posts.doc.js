const posts = [{

  _id: '6378f0354f228b0c463dfc8c',
  title: 'title1',
  description: 'description1',
  comments: [],
  createdAt: '2022-11-19T15:03:17.469Z',
  updatedAt: '2022-11-19T17:48:24.861Z',
  __v: 0
}]

const listPosts = {
  tags: ['posts'],
  description: 'List all posts',
  summary: 'list all posts',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              count: 1,
              posts
            }
          }
        }
      }
    }
  }
}

const createPost = {
  tags: ['posts'],
  description: 'Create a the post',
  summary: 'create a the post',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'Title of the post',
              example: 'Olá'
            },
            description: {
              type: 'string',
              description: 'Description of the post',
              example: 'There are many variations of passages'
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'CREATED',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: posts[0]
          }
        }
      }
    },
    400: {
      description: 'BAD REQUEST'
    }
  }
}

const getPostById = {
  tags: ['posts'],
  description: 'Get post by id',
  summary: 'get post by id',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '6378f0354f228b0c463dfc8c'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: posts[0]
          }
        }
      }
    },
    400: {
      description: 'Post not found'
    }
  }
}

// UPDATE
const updatePost = {
  tags: ['posts'],
  description: 'Update a the post',
  summary: 'update a the post',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '6378f0354f228b0c463dfc8c'
    }
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'Title of the post',
              example: 'Olá'
            },
            description: {
              type: 'string',
              description: 'Description of the post',
              example: 'There are many variations of passages'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: posts[0]
          }
        }
      }
    },
    404: {
      description: 'NOT FOUND'
    },

    400: {
      description: 'BAD REQUEST'
    }
  }
}

const deletePost = {
  tags: ['posts'],
  description: 'Delete a the post',
  summary: 'delete a the post',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '6378f0354f228b0c463dfc8c'
    }
  ],

  responses: {
    203: {
      description: 'NON-AUTHORITATIVE',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: posts[1]
          }
        }
      }
    },
    404: {
      description: 'NOT FOUND'
    },

    400: {
      description: 'BAD REQUEST'
    }
  }
}

const postRouteDoc = {
  '/posts': {
    get: listPosts,
    post: createPost
  },
  '/posts/{id}': {
    get: getPostById,
    put: updatePost,
    delete: deletePost
  }

}

module.exports = postRouteDoc
