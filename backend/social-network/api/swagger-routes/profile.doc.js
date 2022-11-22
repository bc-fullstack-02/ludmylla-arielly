const getAllProfiles = {
  tags: ['profile'],
  description: 'Get all profiles',
  summary: 'get all profiles',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              count: 1
            // profiles
            }
          }
        }
      }
    },
    401: {
      description: 'UNAUTHORIZED'
    }
  }
}

const findProfileByName = {
  tags: ['profile'],
  description: 'Search profile by name',
  summary: 'search profile by name',
  parameters: [
    {
      name: 'q',
      in: 'query',
      description: 'name of the profile',
      type: 'string',
      example: 'Maria Lima'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object'
            // example: posts[0]
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

const followProfile = {
  tags: ['profile'],
  description: 'Follow profile',
  summary: 'follow profile',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the profile',
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object'
            // example: posts[0]
          }
        }
      }
    },
    401: {
      description: 'UNAUTHORIZED'
    },
    400: {
      description: 'BAD REQUEST'
    },
    404: {
      description: 'NOT FOUND'
    }
  }
}

const unfollowProfile = {
  tags: ['profile'],
  description: 'Unfollow profile',
  summary: 'unfollow profile',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the profile',
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object'
            // example: posts[0]
          }
        }
      }
    },
    401: {
      description: 'UNAUTHORIZED'
    },
    400: {
      description: 'BAD REQUEST'
    },
    404: {
      description: 'NOT FOUND'
    }
  }
}

const profileRouteDoc = {
  '/profiles': {
    get: getAllProfiles
  },
  '/profiles/search?q={q}': {
    get: findProfileByName
  },
  '/profiles/{id}/follow': {
    post: followProfile
  },
  '/profiles/{id}/unfollow': {
    post: unfollowProfile
  }
}

module.exports = profileRouteDoc
