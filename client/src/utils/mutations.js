import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                password
                first_name
                last_name
                email
                picture
                trips {
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
                        description
                        location
                        img_url
                    }
                }
            }
        }
    }
`

export const LOGIN_GOOGLE_USER = gql`
    mutation loginGoogleUser($email: String!) {
        loginGoogleUser(email: $email) {
            token
            user {
                _id
                username
                password
                first_name
                last_name
                email
                picture
                trips {
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
        }
    }
`

export const ADD_USER = gql`
    mutation AddUser(
        $email: String!
        $username: String
        $first_name: String!
        $last_name: String!
        $password: String!
    ) {
        addUser(
            email: $email
            username: $username
            first_name: $first_name
            last_name: $last_name
            password: $password
        ) {
            token
            user {
                _id
                username
                password
                first_name
                last_name
                email
                picture
                trips {
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
        }
    }
`

export const ADD_GOOGLE_USER = gql`
    mutation AddGoogleUser(
        $email: String!
        $username: String
        $first_name: String!
        $last_name: String!
        $googleUser: Boolean!
    ) {
        addGoogleUser(
            email: $email
            username: $username
            first_name: $first_name
            last_name: $last_name
            googleUser: $googleUser
        ) {
            token
            user {
                _id
                username
                password
                first_name
                last_name
                email
                picture
                trips {
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
        }
    }
`

export const DELETE_HIGHLIGHT = gql`
    mutation DeleteHighlight($highlightId: ID!) {
        deleteHighlight(highlightId: $highlightId) {
            _id
            tripId
            name
            location
            img_url
        }
    }
`

export const ADD_HIGHLIGHT = gql`
    mutation AddHighlight($highlight: HighlightInput!) {
        addHighlight(highlight: $highlight) {
            _id
            tripId
            name
            location
            img_url
        }
    }
`

export const REMOVE_TRIP = gql`
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
`

export const ADD_TRIP = gql`
    mutation AddTrip($trip: TripInput!) {
        addTrip(trip: $trip) {
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
