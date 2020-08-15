import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { useLoad } from '../contexts/load'
import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const { load, setLoad } = useLoad()
  const { signed, loading } = useAuth()

  useEffect(() => {
    if (!(load === loading)) {
      setLoad(false)
    }
  }, [loading])

  return (
    <BrowserRouter>
      <Switch>
        {signed ? <AppRoutes /> : <AuthRoutes />}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
