const fetch = require('node-fetch')

const resolvers = {
    Query: {
      hello: (_, { name }) => { 
        const returnValue = name ? `Hello ${name || 'World!'}` : null
        return returnValue
      },
      users: async (_, { id}) => {
          const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${id ? id : ''}`)
        return await response.json()
      },
      posts: async (_, {id}) => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id ? id : ''}`)
          return await response.json()
      }
    },
  }

  module.exports = {resolvers}