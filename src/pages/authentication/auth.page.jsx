import React, { useState } from 'react'
import loginImage from '../../assets/login-page-pic.png'
import './auth.styles.scss'
import SignInForm from './../../components/sign-in-form/sign-in-form.component';
import SignUpForm from './../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true)
  return (
    <div className="auth-page-container">
      <div className="auth-image-container">
        <img src={loginImage} alt="login-page-pic" />
      </div>
      <div className="auth-form-container">
        {toggleSignIn ? <SignInForm /> : <SignUpForm />}
        <div className="toggle-text" onClick={() => setToggleSignIn((prev) => !prev)}>
          {toggleSignIn
            ? "Don't have an Account? Click here to Sign Up"
            : 'Already have an Account? Click here to Sign In '}
        </div>
      </div>
    </div>
  )
}

export default Authentication
