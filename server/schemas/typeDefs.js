const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String
        first_name: String!
        last_name: String!
        email: String!
        picture: String
        trips: [Trip]
    }

    type Trip {
        _id: ID
        userId: String
        name: String
        destination: String
        description: String
        img_url: String
        highlights: [Highlight]
    }

    type Auth {
        token: ID!
        user: User
    }

    input TripInput {
        name: String!
        userId: String
        destination: String!
        description: String!
        img_url: String
    }

    type Highlight {
        _id: ID
        tripId: String
        name: String
        location: String
        img_url: String
    }

    input HighlightInput {
        name: String
        location: String!
        tripId: String!
        img_url: String
    }

    type Query {
        users: [User]
        user(username: String): User
        userById(userId: ID!): User
        trips(username: String): [Trip]
        trip(tripId: ID!): Trip
        highlights(tripId: String): [Highlight]
        highlight(highlightId: ID!): Highlight
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        loginGoogleUser(email: String!): Auth
        addUser(
            email: String!
            username: String
            first_name: String!
            last_name: String!
            password: String!
        ): Auth
        addGoogleUser(
            email: String!
            username: String
            first_name: String!
            last_name: String!
            googleUser: Boolean!
        ): Auth
        addTrip(trip: TripInput!): Trip
        removeTrip(tripId: ID!): Trip
        addHighlight(highlight: HighlightInput!): Highlight
        deleteHighlight(highlightId: ID!): Highlight
    }
`

module.exports = typeDefs
