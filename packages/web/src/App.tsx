import React, { useState } from 'react'
import { ThemeProvider } from './styles/styled-components.d'
import GlobalStyle from './styles/GlobalStyle'

import Routes from './routes/auth'

import { LightTheme } from './styles/themes'
import { Container } from './styles/App'

const App: React.FC = () => {
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  )
}

export default App
