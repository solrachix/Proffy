import { createGlobalStyle } from 'styled-components'
//  import { lighten } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 60%;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background :${({ theme }) => theme.colors.themeColors.tertiary};
    color: ${({ theme }) => theme.colors.themeColors.text};

    -webkit-font-smoothing: antialiased;
    font-size: 60%;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, select {
    font: 500 1.6rem Poppins;
    outline: none;
    /* color:  ${props => props.theme.colors.themeColors.text} */
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.themeColors.text};
    font-family: Poppins;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  ::-webkit-scrollbar{
    width: 8px;
    background: ${({ theme }) => theme.colors.themeColors.primary.dark};
  }
  ::-webkit-scrollbar-thumb{
    background: ${({ theme }) => theme.colors.themeColors.primary.dark};
    border-radius: 50px;
  }
`
