const typeDefs = `
    
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        address: Address
        phone: String!
        website: String!
        company: Company!
        post: [Post]
        album: [Album]
        todo: [Todo]
    }

    type Address {
        street: String!
        suite: String!
        city: String!
        zipcode: String!
        geo: Coordinates!
    }

    type Coordinates {
        lat: Float!
        lng: Float!
    } 

    type Company {
        name: String!
        catchPhrase: String!
        bs: String!
    }

    type Post {
        userId: ID!
        id: ID!
        title: String!
        body: String!
    }

    type Album {
        userId: ID!
        id: ID!
        title: String!
        photo: [Photo]
    }

    type Photo {
        albumId: ID!
        id: ID!
        title: String!
        url: String!
        thumbnailUrl: String!
    }

    type Todo {
        userId: ID!
        id: ID!
        title: String!
        completed: Boolean!
    }

    type Query {
        users(id: ID!): User
        posts(id: ID!): Post
    }

`

module.exports = {typeDefs}