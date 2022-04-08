const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        password: String
        first_name: String
        last_name: String
        email: String
        trips: [Trips]
        picture: Picture
    }

    type Trip {
        _id: ID
        name: String
        destination: String
        description: String
        img_url: String
        highlights: [Highlight]
    }

    type Highlight {
        _id: ID
        name: String
        location: String
        img_url: String
    }

    type Query {
        users: [User]
        trips: [Trip]
        highlights: [Highlight]
    }


`

module.exports = typeDefs;