import React, { useState } from 'react'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (event) => {
    const { name } = event
  }
  const handleSubmit = (event) => {}
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" name="displayName" value={displayName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm