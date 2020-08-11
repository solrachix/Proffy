import React, { createContext, useState, useEffect, useContext } from 'react'
import api from '@proffy/axios-config'

interface User {
  id: number,
  name: string,
  email: string,
  avatar: string | null,
  whatsapp: string | null,
  bio: string | null
}
interface Authentication {
  user: User,
  token: string
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(url: string, params: unknown): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData () {
      const user = localStorage.getItem('@RAuth:user')
      const token = localStorage.getItem('@RAuth:token')

      if (user && token) {
        api.defaults.headers.Authorization = `token ${token[1]}`

        setUser(JSON.parse(user[1]))
      }
      setLoading(false)
    }
    loadStorageData()
  }, [])

  async function signIn (url: string, params: unknown) {
    const { data } = await api.get<Authentication>(url, { params })

    setUser(data.user)

    // Set toke for all request
    api.defaults.headers.Authorization = `Token ${data.token}`

    localStorage.setItem('@RAuth:user', JSON.stringify(data.user))
    localStorage.setItem('@RAuth:token', data.token)
  }

  function signOut () {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook próprio
export function useAuth () {
  const context = useContext(AuthContext)

  console.log(AuthContext, context)
  return context
}
