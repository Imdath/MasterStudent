import {useState} from 'react'

import './index.css'

// credentials for master and student
const masterCredentials = {
  username: 'master',
  password: 'master123',
}

const studentCredentials = {
  username: 'student',
  password: 'student123',
}

// Login Component
const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  // function to log the user in
  const loggingIn = () => {
    if (
      (username === masterCredentials.username &&
        password === masterCredentials.password) ||
      (username === studentCredentials.username &&
        password === studentCredentials.password)
    ) {
      const {history} = props
      history.push('/master')
      setErrMsg('')
    } else {
      setErrMsg('Please enter the correct credentials')
    }
  }

  // function to sign up the user
  const submitForm = event => {
    event.preventDefault()
    const {history} = props
    history.push('/SignUp')
  }

  // function to render the password input element
  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
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

  // displaying the login form
  return (
    <div className="login-container">
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <div className="buttons-container">
          <p className="err-msg">{errMsg}</p>
          <button onClick={loggingIn} type="button" className="login-button">
            Login
          </button>
          <button type="submit" className="login-button">
            Sign Up
          </button>
          <p className="signup">Not a user yet? Sign Up.</p>
        </div>
      </form>
    </div>
  )
}

export default Login
