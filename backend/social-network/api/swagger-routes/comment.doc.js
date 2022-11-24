const comments = [{
  _id: '6379169a781ac388d8eb79db',
  description: 'comment5',
  user: '681546shu8585aw6788984f86',
  post: {
    _id: '63793a3873d0b8e3a8015da8',
    title: 'Olá',
    description: 'There are many variations of passages',
    comments: [],
    createdAt: '2022-11-19T20:19:04.812Z',
    updatedAt: '2022-11-19T22:28:51.117Z',
    __v: 0
  },
  createdAt: '2022-11-19T17:47:06.622Z',
  updatedAt: '2022-11-19T17:47:06.622Z',
  __v: 0
}]

const listComments = {
  tags: ['comments'],
  description: 'List all post comments',
  summary: 'list all post comments',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              count: 1,
              comments
            }
          }
        }
      }
    },
    404: {
      description: 'NOT FOUND'
    }
  }
}

const getCommentById = {
  tags: ['comments'],
  description: 'Get post comments by id',
  summary: 'get post comments by id',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    },
    {
      name: 'commentId',
      in: 'path',
      description: 'id of the comment',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              count: 1,
              comments
            }
          }
        }
      }
    },
    404: {
      description: 'NOT FOUND'
    }
  }
}

const createComment = {
  tags: ['comments'],
  description: 'Create a the comment',
  summary: 'create a the comment',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    }
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
              description: 'Description of the comment',
              example: 'The standard chunk of Lorem Ipsum used'
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
            example: comments[0]
          }
        }
      }
    },
    400: {
      description: 'BAD REQUEST'
    }
  }
}

const updateComment = {
  tags: ['comments'],
  description: 'Update post comment',
  summary: 'update post comment',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    },
    {
      name: 'commentId',
      in: 'path',
      description: 'id of the comment',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    }
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
              description: 'Description of the comment',
              example: 'The standard chunk of Lorem Ipsum used'
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
            example: {
              count: 1,
              comments
            }
          }
        }
      }
    },
    404: {
      description: 'NOT FOUND'
    }
  }
}

const deleteComment = {
  tags: ['comments'],
  description: 'Delete post comments by id',
  summary: 'delete post comments by id',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    },
    {
      name: 'commentId',
      in: 'path',
      description: 'id of the comment',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    }
  ],
  responses: {
    203: {
      description: 'NON-AUTHORITATIVE',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: comments[1]
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

const likeComments = {
  tags: ['comments'],
  description: 'Like comments',
  summary: 'like comments',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the post',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    },
    {
      name: 'commentId',
      in: 'path',
      description: 'id of the comment',
      type: 'string',
      example: '63793a3873d0b8e3a8015da8'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: comments[1]
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

const commentRouteDoc = {
  '/posts/{id}/comments': {
    get: listComments,
    post: createComment
  },
  '/posts/{id}/comments/{commentId}': {
    get: getCommentById,
    put: updateComment,
    delete: deleteComment
  },
  '/posts/{id}/comments/{commentId}/like': {
    post: likeComments
  }
}

module.exports = commentRouteDoc
