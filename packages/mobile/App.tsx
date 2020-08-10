import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Host } from 'react-native-portalize'
import { AuthProvider } from './src/contexts/auth'
import { ThemeProvider } from 'styled-components'

import { LightTheme } from './src/styles/themes'

import Routes from './src/routes'

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins'
import {
  Archivo_400Regular,
  Archivo_700Bold
} from '@expo-google-fonts/archivo'

export default function App () {
  const [theme, setTheme] = useState(LightTheme)

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_400Regular,
    Archivo_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme} >
          <Host>
            <StatusBar style="light" />
            <Routes />
          </Host>
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
