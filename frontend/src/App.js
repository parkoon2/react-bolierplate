import React from "react"
import { Route, Switch, Link } from 'react-router-dom'

// Components
import Button from './components/Button'

function App() {
  return <div className="app">

    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/dashboard">
        Dashboard
      </Link>
    </nav>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  </div>;
}

function Home() {
  return <h1>Home page</h1>

}

function Dashboard() {
  return <h1>Dashboard page</h1>

}

function About() {
  return <h1>About page</h1>
}

export default App;
