import React, { useState } from 'react'
import {
  createAuthUserUsingEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input.component'
import Button from '../buttons/button.component'
import './sign-in-form.styles.scss'

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
      const response = await createAuthUserUsingEmailAndPassword(email, password)
      const { user } = response
      await createUserDocumentFromAuth(user)
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use.')
      }
      console.error(error.code)
    }
  }

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    const { user } = response
    await createUserDocumentFromAuth(user)
  }
  return (
    <div className="sign-in-container">
      <h2>Sign Into your Account.</h2>
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
      <p>OR</p>
      <Button buttonType={'google'} onClick={logGoogleUser}>
        Sign in with Google
      </Button>
    </div>
  )
}

export default SignInForm
