import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'


function App() {
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">
           {user ? <Redirect to="/"/> :  <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> :  <Register />}
        </Route>
        <Route path="/profile/:uid">
            <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
