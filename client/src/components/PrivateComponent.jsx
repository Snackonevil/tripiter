import Auth from '../utils/auth'

export default function PrivateComponent({ children, ownerId }) {
    if (!Auth.loggedIn()) {
        return ''
    } else {
        const { data } = Auth.getProfile()
        if (data._id === ownerId) {
            return children
        } else {
            return ''
        }
    }
}
