import { gql } from '@apollo/client'
//GO BACK TO SIGNED IN ONE
export const QUERY_ME = gql`
    {
        me {
            _id
            username
            first_name
            last_name
            email
            picture
            trips {
                _id
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
`

export const QUERY_USER = gql`
    query User($username: String) {
        user(username: $username) {
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
`
export const QUERY_USERS = gql`
    query Users {
        users {
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
`
export const QUERY_USERBYID = gql`
    query UserById($userId: ID!) {
        userById(userId: $userId) {
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
`
export const QUERY_TRIPS = gql`
    query Trips($username: String) {
        trips(username: $username) {
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
`
export const QUERY_TRIP = gql`
    query Trip($tripId: ID!) {
        trip(tripId: $tripId) {
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
`
export const QUERY_HIGHLIGHTS = gql`
    query Highlights($tripId: String) {
        highlights(tripId: $tripId) {
            _id
            tripId
            name
            description
            location
            img_url
        }
    }
`
export const QUERY_HIGHLIGHT = gql`
    query Highlight($highlightId: ID!) {
        highlight(highlightId: $highlightId) {
            _id
            tripId
            name
            description
            location
            img_url
        }
    }
`
