import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.yellow} ;
  }

  html {
	  font-size: 62.5%;
    width: 75%;
    margin: auto;
    background: ${(props) => props.theme.background};
  }

  body {
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    /* font-family: 'Baloo 2', cursive; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.0rem;
  }
`
