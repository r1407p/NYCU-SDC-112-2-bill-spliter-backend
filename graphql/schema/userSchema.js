export const userTypes = `
    type User {
        _id: ID!
        username: String!
        password: String
        email: String!
        createdBooks: [Book!]!
    }

    input UserInput {
        username: String!
        password: String!
        email: String!
    }

    type authData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type RootQuery {
        users: [User!]!
        user(userID: ID): User!
        login(email: String!, password: String!): authData!
    }

    type RootMutation {
        createUser(userInput: UserInput!): User
    }
`