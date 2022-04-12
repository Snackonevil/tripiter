import { gql } from '@apollo/client';
//add in add-user fields
export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//changed mutation Mutation to deleteHighlight
export const DELETE_HIGHLIGHT = gql `
mutation DeleteHighlight($highlightId: ID!) {
  deleteHighlight(highlightId: $highlightId) {
    _id
    tripId
    name
    location
    img_url
  }
}
`;
//changed mutation Mutation to addHighlight
export const ADD_HIGHLIGHT = gql `
mutation AddHighlight($highlight: HighlightInput!) {
  addHighlight(highlight: $highlight) {
    _id
    tripId
    name
    location
    img_url
  }
}
`;
//changed mutation Mutation to removeTrip
export const REMOVE_TRIP = gql `
mutation RemoveTrip($tripId: ID!) {
  removeTrip(tripId: $tripId) {
    _id
    userId
    name
    destination
    description
    img_url
    highlights {
      _id
      tripId
      name
      location
      img_url
    }
  }
}
`;
//changed mutation Mutation to addTrip
export const ADD_TRIP = gql `
mutation AddTrip($trip: TripInput!) {
  addTrip(trip: $trip) {
    _id
    userId
    name
    destination
    description
    img_url
    highlights {
      _id
      tripId
      name
      location
      img_url
    }
  }
}
`
