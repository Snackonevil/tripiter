import { useState, useEffect, createContext } from 'react'
import firebaseApp from '../config/firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from 'firebase/auth'

export const AuthContext = createContext()
const provider = new GoogleAuthProvider()
const auth = getAuth(firebaseApp)

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    async function login(email, password) {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    async function signUp(name, email, password) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    async function googleAuth() {
        return await signInWithPopup(auth, provider)
    }

    function signOutUser() {
        signOut(auth)
        setCurrentUser(null)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        setCurrentUser,
        login,
        signUp,
        googleAuth,
        signOutUser,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
