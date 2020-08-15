import React from 'react'

import { LoadProvider } from './load'
import { AuthProvider } from './auth'

const AppProvider: React.FC = ({ children }) => {
  return (
    <LoadProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </LoadProvider>
  )
}

export default AppProvider
