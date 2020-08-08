import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from '../pages/Landing'
import TeacherList from '../pages/TeacherList'
import TeacherForm from '../pages/TeacherForm'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
