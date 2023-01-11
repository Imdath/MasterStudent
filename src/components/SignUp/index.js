import {useState} from 'react'

import emailjs from '@emailjs/browser'

import './index.css'

const SignUp = props => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const backToLoggingIn = () => {
    const {history} = props
    history.push('/')
  }

  const user = {
    email,
    username,
  }

  const onSignUp = event => {
    event.preventDefault()
    emailjs
      .sendForm(
        'service_jdms7vl',
        'template_8omz0qc',
        user,
        'SsA2VyYq7EnWJE7U7',
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
  }

  // function to render the password input element
  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        EMAIL
      </label>
      <input
        type="email"
        id="password"
        className="password-input-field"
        value={email}
        onChange={onChangeEmail}
        placeholder="Password"
      />
    </>
  )

  // function to render the username input element
  const renderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        USERNAME
      </label>
      <input
        type="text"
        id="email"
        className="email-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  )

  return (
    <div className="login-container">
      <form className="form-container" onSubmit={onSignUp}>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <div className="buttons-container">
          <button type="submit" className="login-button">
            Sign Up
          </button>
          <button
            onClick={backToLoggingIn}
            type="button"
            className="login-button"
          >
            Back to Login In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
