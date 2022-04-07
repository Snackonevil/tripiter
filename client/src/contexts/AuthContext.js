import { useState, useEffect, useContext, createContext } from 'react';
import auth from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const AuthContext = createContext();
const provider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('');

  async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  async function signUp(name, email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  async function googleAuth() {
    return await signInWithPopup(auth, provider);
  }

  function signOutUser() {
    signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    googleAuth,
    signOutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
