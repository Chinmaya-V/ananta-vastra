import React, { useState } from 'react'
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input.component'
import Button from '../buttons/button.component'
import './sign-in-form.styles.scss'
import GoogleLogoSvg from '../../assets/GoogleLogoSvg'

const defaultFormFields = {
  email: '',
  password: '',
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email && !password) {
      alert('Fill all the required fields')
      return
    }

    try {
      const response = await signInUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      console.error(error.code)
    }
  }

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup()
    const { user } = response
    await createUserDocumentFromAuth(user)
  }
  return (
    <div className="sign-in-container">
      <h2>Already Have an Account ?</h2>
      <p>Sign in with your Email or Password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Email'}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label={'Password'}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <Button type="submit">Sign In</Button>
      </form>
      <p className="or-text">OR</p>
      <Button buttonType={'google'} onClick={signInWithGoogle}>
        <GoogleLogoSvg size="32px" />
        Sign In With Google
      </Button>
    </div>
  )
}

export default SignInForm
