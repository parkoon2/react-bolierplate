import React from "react"
import { Route, Switch, Link } from 'react-router-dom'

// Components
import Header from './components/Header'
import PrivateRoute from "./router/PrivateRoute";

// Pages
import Login from './pages/Login'

function App() {
  return <div className="app">

    <Header />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/about">
        <About />
      </PrivateRoute>
    </Switch>
  </div>;
}

function Home() {
  return <h1>Home page!!</h1>

}

function About() {
  return <h1>About page</h1>
}

export default App;
