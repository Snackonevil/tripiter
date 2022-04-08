const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    first_name: String
    last_name: String
    email: String
    picture: String
    trips: [Trip]
  }

  type Trip {
    _id: ID
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
    name: String
    destination: String
    tripId: String!
    description: String
    img_url: String
  }

  type Highlight {
    _id: ID
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
    me: User
  }

  type Mutation {
    login(email:String!, password: String!): Auth
    addUser(email:String!, username: String!, password:String!, first_name:String!, last_name:String!): User
    addTrip(tripData: TripInput!): User
    removeTrip(tripID: ID!):User
    addHighlight(highlightData: HighlightInput!): Trip
    deleteHighlight(highlightID: ID!): Trip
  }
`;

module.exports = typeDefs;

// addPicture()
// removePicture()
// addHighlight()
// removeHighlight()
// trips: [Trip]
// highlights: [Highlight]
