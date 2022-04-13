import React from 'react'
import Auth from '../utils/auth'

export default function PrivateComponent({ children, userId }) {
    const { data } = Auth.getProfile()
    if (userId === data._id) {
        return children
    } else {
        return ''
    }
}
