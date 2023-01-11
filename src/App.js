import {Route, Switch} from 'react-router-dom'

import Master from './components/Master'

import Login from './components/Login'

import SignUp from './components/SignUp'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/master" component={Master} />
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={SignUp} />
  </Switch>
)
export default App
