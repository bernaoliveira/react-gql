export default `#graphql
    type User {
        id: Int!
        token: String!
        name: String!
        email: String!
        notes: [Note!]!
    }

    type Note {
        id: Int!
        title: String!
        text: String!
        createdAt: String!
        # Not sure if this key is needed right now, because it's just a reference to parent
        # user: User!
    }

    type Query {
        #Returns a token
        login(email: String!, password: String!): String!
        user: User
    }

    type Mutation {
        #Returns a token
        register(name: String!, email: String!, password: String!): String!
        restore(email: String!): Boolean!
        reset(password: String!, restoreToken: String!): Boolean!
        createNote(title: String!, text: String!): Note!
        deleteNote(id: Int!): Boolean!
    }
`;
