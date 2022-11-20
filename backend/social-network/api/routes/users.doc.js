const users = [{
  _id: '6378ecfa8c83021055e215dc',
  name: 'Anna',
  user: 'anna',
  password: '$2b$10$9lkiOBJMYjGU74R.yOujvujswW/3EJ0K0Sjr/8D9z/ksnwRhUp6rW',
  following: [],
  __v: 0

}]

const login = [{
  user: 'Maria',
  password: '123456'
}]

const listUsers = {
  tags: ['users'],
  description: 'List all users',
  summary: 'list all users',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              count: 1,
              users
            }
          }
        }
      }
    }
  }
}

const loginUser = {
  tags: ['users'],
  description: 'Login a the user',
  summary: 'login a the user',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            user: {
              type: 'string',
              description: 'User of the user',
              example: 'jose'
            },
            password: {
              type: 'string',
              description: 'Password of the user',
              example: '123456'
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
            example: login[0]
          }
        }
      }
    },

    401: {
      description: 'UNAUTHORIZED'
    },

    400: {
      description: 'BAD REQUEST'
    }
  }
}

const createUsers = {
  tags: ['users'],
  description: 'Create a the user',
  summary: 'create a the user',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the user',
              example: 'José'
            },
            user: {
              type: 'string',
              description: 'User of the user',
              example: 'jose'
            },
            password: {
              type: 'string',
              description: 'Password of the user',
              example: '123456'
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
            example: users[0]
          }
        }
      }
    },
    400: {
      description: 'BAD REQUEST'
    }
  }
}

const getUserById = {
  tags: ['users'],
  description: 'Get user by id',
  summary: 'get user by id',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the user',
      type: 'string',
      example: '6378ecfa8c83021055e215dc'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: users[0]
          }
        }
      }
    },
    404: {
      description: 'NOT FOUND'
    }
  }
}

const updateUsers = {
  tags: ['users'],
  description: 'Update a the user',
  summary: 'update a the user',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the user',
      type: 'string',
      example: '6378ecfa8c83021055e215dc'
    }
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the user',
              example: 'José'
            },
            user: {
              type: 'string',
              description: 'User of the user',
              example: 'jose'
            },
            password: {
              type: 'string',
              description: 'Password of the user',
              example: '123456'
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
            example: users[0]
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

const deleteUsers = {
  tags: ['users'],
  description: 'Delete a the user',
  summary: 'delete a the user',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the user',
      type: 'string',
      example: '6378ecfa8c83021055e215dc'
    }
  ],
  responses: {
    203: {
      description: 'NON-AUTHORITATIVE',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: users[1]
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

const userRouteDoc = {
  '/users': {
    get: listUsers,
    post: createUsers
  },
  '/users/{id}': {
    get: getUserById,
    put: updateUsers,
    delete: deleteUsers
  },
  '/users/login': {
    post: loginUser
  }
}

module.exports = userRouteDoc
