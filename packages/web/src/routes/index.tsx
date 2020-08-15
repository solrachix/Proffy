import React, { useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const theme = useContext(ThemeContext).colors
  const { signed, loading } = useAuth()

  if (loading) {
    return (
      <div>aaaaaa</div>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        {signed ? <AppRoutes /> : <AuthRoutes />}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
