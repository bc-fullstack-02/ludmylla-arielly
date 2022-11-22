const users = [{
  _id: '6378ecfa8c83021055e215dc',
  user: 'anna',
  password: '$2b$10$9lkiOBJMYjGU74R.yOujvujswW/3EJ0K0Sjr/8D9z/ksnwRhUp6rW',
  profile: '7875224f555ht147145588',
  __v: 0
}]

const getUserById = {
  tags: ['users'],
  description: 'Get user by id',
  summary: 'get user by id',

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

  '/users/me': {
    get: getUserById,
    put: updateUsers,
    delete: deleteUsers
  }
}

module.exports = userRouteDoc
