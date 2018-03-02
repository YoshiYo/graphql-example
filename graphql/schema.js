const typeDefs = `
    
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        address: Address
        phone: String!
        website: String!
        company: Company
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

    type Query {
        hello(name: String): String
        users(id: ID!): User
        posts(id: ID!): Post
    }

`

module.exports = {typeDefs}