const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        userName: String
        password: String
        picture: Picture
        trips: [Trips]
    }

    type Trip {
        _id: ID
        name: String
        picture: Url
        place: Url
        highlights: [Highlight]
    }

    type Highlight {
        _id: ID
        name: String
        description: String
    }

    type Query {
        users: [User]
        trips: [Trip]
        highlights: [Highlight]
    }


`

module.exports = typeDefs;