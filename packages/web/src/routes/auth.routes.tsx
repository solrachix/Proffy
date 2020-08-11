import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Auth from '../pages/Auth'
const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthRoutes
