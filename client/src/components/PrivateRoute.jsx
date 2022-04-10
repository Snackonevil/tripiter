import { Navigate } from 'react-router-dom'

// Protects routed components by checking if currentUser exists
export default function PrivateRoute({ currentUser, children }) {
    if (!currentUser) {
        return <Navigate to="/login" />
    }
    return children
}
