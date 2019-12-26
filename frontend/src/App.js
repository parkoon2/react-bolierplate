import React from "react"
import { Route, Switch, Link } from 'react-router-dom'

// Components
import Button from './components/Button'
import PrivateRoute from "./router/PrivateRoute";

// Pages
import LoginPage from './pages/LoginPage'

function App() {
  return <div className="app">

    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
    </nav>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute path="/about">
        <About />
      </PrivateRoute>
    </Switch>
  </div>;
}

function Home() {
  return <h1>Home page</h1>

}

function About() {
  return <h1>About page</h1>
}

export default App;
