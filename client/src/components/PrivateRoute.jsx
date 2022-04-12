import { Navigate } from 'react-router-dom'
import Auth from '../utils/auth'

// Protects routed components by checking if currentUser exists
export default function PrivateRoute({ children }) {
    if (Auth.loggedIn()) {
        return children
    } else {
        return <Navigate to="/login" />
    }
}
