const users = [{
  _id: '6378ecfa8c83021055e215dc',
  user: 'anna',
  password: '$2b$10$9lkiOBJMYjGU74R.yOujvujswW/3EJ0K0Sjr/8D9z/ksnwRhUp6rW',
  profile: '7875224f555ht147145588',
  __v: 0
}]

const login = [{
  user: 'anna',
  password: '123456'
}]

const createUser = {
  tags: ['security'],
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

const loginUser = {
  tags: ['security'],
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
              example: 'anna'
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

const securityDoc = {
  '/security/register': {
    post: createUser
  },
  '/security/login': {
    post: loginUser
  }
}

module.exports = securityDoc
