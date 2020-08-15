import React from 'react'
import { Route } from 'react-router-dom'

import Auth from '../pages/Auth'
const AuthRoutes: React.FC = () => {
  return <Route path="/" exact component={Auth} />
}

export default AuthRoutes
