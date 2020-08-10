import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../screens/Landing'
import GiveClasses from '../screens/GiveClasses'
import StudyTabs from './StudyTabs'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Landing" component={Landing} />
      <Screen name="GiveClasses" component={GiveClasses} />
      <Screen name="Study" component={StudyTabs} />
    </Navigator>
  )
}

export default AppRoutes
