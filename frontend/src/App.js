import React from "react"
import { Route, Switch, Link } from 'react-router-dom'

// Components
import Header from './components/Header'
import PrivateRoute from "./router/PrivateRoute";

// Pages
import Login from './pages/Login'
import Private from "./pages/Private";

function App() {
  return <div className="app">

    <Header />

    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/private">
        <Private />
      </PrivateRoute>
    </Switch>
  </div>;
}

export default App;
