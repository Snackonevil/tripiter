import Auth from '../utils/auth'

export default function PrivateComponent({ children, userId }) {
    if (!Auth.loggedIn()) {
        return ''
    } else {
        const { data } = Auth.getProfile()
        if (userId === data._id) {
            return children
        } else {
            return ''
        }
    }
}
