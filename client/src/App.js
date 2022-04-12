import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

require('dotenv').config()

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import TripBoard from './pages/TripBoard'
import Dashboard from './pages/Dashboard'
import HighlightsPage from './pages/HighlightsPage'
import CreateProfile from './components/CreateProfile'

import Navbar from './components/Navbar'
import AddTrip from './components/AddTrip'

import PrivateRoute from './components/PrivateRoute'

import './App.css'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
})

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})
function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/create-profile" element={<CreateProfile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/addtrip" element={<AddTrip />} />
                    <Route path="/tripboard" element={<TripBoard />} />
                    <Route path="/highlight" element={<HighlightsPage />} />
                </Routes>
            </Router>
        </ApolloProvider>
    )
}

export default App
