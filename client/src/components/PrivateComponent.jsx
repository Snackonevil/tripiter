import React from 'react'
import Auth from '../utils/auth'

export default function PrivateComponent({ children, userId }) {
    const { _id } = Auth.getProfile()
    if (userId === _id) {
        return children
    } else {
        return ''
    }
}
