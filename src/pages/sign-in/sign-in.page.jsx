import React from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    const { user } = response
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }

  return (
    <>
      <div>This is SignIn and Sign Up Page</div>
      <SignUpForm />
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  )
}

export default SignIn
