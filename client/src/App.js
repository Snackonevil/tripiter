import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// Page Components
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import TripPage from './pages/TripPage'
import Dashboard from './pages/Dashboard'

// Components
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

import './App.css'

// GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
})

// Auth middleware
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const client = new ApolloClient({
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
                    <Route path="/trip/:tripId" element={<TripPage />} />
                </Routes>
            </Router>
        </ApolloProvider>
    )
}

export default App
