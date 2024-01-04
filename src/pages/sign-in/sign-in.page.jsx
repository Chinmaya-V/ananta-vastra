import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
  }

  return (
    <>
      <div>This is SignIn and Sign Up Page</div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  )
}

export default SignIn
