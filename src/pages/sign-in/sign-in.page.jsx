import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    const { user } = response
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef);
  }

  return (
    <>
      <div>This is SignIn and Sign Up Page</div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  )
}

export default SignIn
