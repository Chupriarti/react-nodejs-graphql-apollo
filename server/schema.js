const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }
    type Post {
        id: ID
        title: String
        content: String
    }

    input UserInput {
        id: ID
        username: String!
        age: Int!
        posts: [Post]!
    }
    input PostInput {
        id: ID
        title: String!
        content: String!
    }

    type Query {
        getAllUsers: [User]
        getuser(id: ID): User
    }
    
`);

module.exports  = schema;