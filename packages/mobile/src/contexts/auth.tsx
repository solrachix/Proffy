import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '@proffy/axios-config'
import * as auth from '../services/auth'

interface User {
    name: string;
    email: string
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
  firstTimeInTheAPP: boolean;
  finishedTheIntro() : void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [firstTimeInTheAPP, setFirstTimeInTheAPP] = useState(false)

  useEffect(() => {
    async function loadStorageData () {
      const [user, token, FirstTime] = await AsyncStorage.multiGet([
        '@RNAuth:user',
        '@RNAuth:token',
        '@RNAFirstTimeInTheAPP'
      ])

      // await new Promise((resolve) => setTimeout(resolve, 1000));
      if (user && token) {
        // Set toke for all request
        api.defaults.headers.Authorization = `Bearer ${token[1]}`

        setFirstTimeInTheAPP(JSON.parse(FirstTime[1]))
        setUser(JSON.parse(user[1]))
        setLoading(false)
      }
    }
    loadStorageData()
  }, [])

  async function signIn () {
    const response = await auth.signIn()

    setUser(response.user)

    // Set toke for all request
    api.defaults.headers.Authorization = `Token ${response.token}`

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNAuth:token', response.token)
  }

  function signOut () {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }

  async function finishedTheIntro () {
    setLoading(false)
    setFirstTimeInTheAPP(false)

    console.log('opaa')
    await AsyncStorage.setItem('@RNAFirstTimeInTheAPP', JSON.stringify(true))
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut, firstTimeInTheAPP, finishedTheIntro }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook próprio
export function useAuth () {
  const context = useContext(AuthContext)

  return context
}
