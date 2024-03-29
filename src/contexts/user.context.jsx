import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebase'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
