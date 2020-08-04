import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <div />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
