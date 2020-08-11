import React, { useState } from 'react'
import { ThemeProvider } from './styles/styled-components.d'
import GlobalStyle from './styles/GlobalStyle'

import AppProvider from './contexts'
import Routes from './routes'

import { LightTheme } from './styles/themes'
import { Container } from './styles/App'

const App: React.FC = () => {
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppProvider>
        <Container>
          <Routes />
        </Container>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
