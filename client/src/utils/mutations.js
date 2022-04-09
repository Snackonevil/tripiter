import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email) {
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
mutation deleteHighlight($highlightId: ID!) {
  deleteHighlight(highlightId: $highlightId) {
    _id
  }
}
`;
//changed mutation Mutation to addHighlight
export const ADD_HIGHLIGHT = gql `
mutation addHighlight($highlight: HighlightInput!) {
  addHighlight(highlight: $highlight) {
    name
    location
    img_url
    _id
  }
}
`;
//changed mutation Mutation to removeTrip
export const DELETE_TRIP = gql `
mutation removeTrip($tripId: ID!) {
  removeTrip(tripId: $tripId) {
    _id
  }
}
`;
//changed mutation Mutation to addTrip
export const ADD_TRIP = gql `
mutation Mutation($trip: TripInput) {
  addTrip(trip: $trip) {
    _id
    name
    description
    destination
  }
}
`
