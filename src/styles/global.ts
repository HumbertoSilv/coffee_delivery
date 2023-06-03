import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html {
	  font-size: 62.5%;
  }

  body {
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    width: 75%;
    margin: auto;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.0rem;
  }
`
