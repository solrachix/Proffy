import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Navigator>
    <Screen name="SignIn" component={SignIn} />
  </Navigator>
)

export default AuthRoutes
