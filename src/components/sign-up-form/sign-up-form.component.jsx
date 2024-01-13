import React, { useState } from 'react'
import {
  createAuthUserUsingEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input.component'
import Button from '../buttons/button.component'
import './sign-up-form.styles.scss'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email && !password && !displayName && !confirmPassword) {
      alert('Fill all the required fields')
      return
    }
    if (password !== confirmPassword) {
      alert('Password not matching')
    }

    try {
      const response = await createAuthUserUsingEmailAndPassword(email, password)
      const { user } = response
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use.')
      }
      console.error(error.code)
    }
  }
  return (
    <div className="sign-up-container">
      <h2>Don't have an Account ?</h2>
      <p>Sign up with your Email or Password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

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

        <FormInput
          label={'Confirm Password'}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
