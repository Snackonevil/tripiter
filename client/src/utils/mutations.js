import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation Login($email: String!) {
        login(email: $email) {
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

export const LOGIN_GOOGLE_USER = gql`
    mutation Login($email: String!) {
        login(email: $email) {
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
        $firstName: String!
        $lastName: String!
        $password: String!
    ) {
        addUser(
            email: $email
            username: $username
            first_name: $firstName
            last_name: $lastName
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
    mutation Login($trip: TripInput!) {
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
