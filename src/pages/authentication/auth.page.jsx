import React from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

const Authentication = () => {


  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
