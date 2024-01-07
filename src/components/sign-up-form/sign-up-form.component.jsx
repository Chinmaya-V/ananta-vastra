import React, { useState } from 'react'
import {
  createAuthUserUsingEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input.component'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formFields)
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
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use.')
      }
      console.error(error.code)
    }
  }
  return (
    <div>
      <h2>Sign up with Email and Password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        {/* <label>Display Name</label>
        <input /> */}

        {/* <label>Email</label> */}
        <FormInput
          label={'Email'}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        {/* <label>Password</label> */}
        <FormInput
          label={'Password'}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        {/* <label>Confirm Password</label> */}
        <FormInput
          label={'Confirm Password'}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
