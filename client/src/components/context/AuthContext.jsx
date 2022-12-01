import React , {useContext, useState, useEffect} from 'react'
import { auth } from '../../firebase/firebase'
import ReactDOM from 'react-dom/client'
import firebase from 'firebase/compat/app';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
 }
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function signup(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }
     async function login(email, password) {
      await firebase.auth().signInWithEmailAndPassword(email, password);
     }

    // function login(email, password) {
    //     return auth.signInWithEmailAndPassword(email, password)
    //   }

      function logout() {
        return auth.signOut()
      }
    
      function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }
    
      function updateEmail(email) {
        return currentUser.updateEmail(email)
      }
    
      function updatePassword(password) {
        return currentUser.updatePassword(password)
      }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
