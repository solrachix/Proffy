import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from '../pages/Landing'
import TeacherList from '../pages/TeacherList'
import Profile from '../pages/Profile'
import * as Class from '../pages/Class'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/profile" component={Profile} />

        <Route path="/class/new" exact component={Class.NewClass} />
        <Route path="/class/:class_id" component={Class.EditClass} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes
