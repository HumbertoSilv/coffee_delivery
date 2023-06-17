import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ProductsContextProvider } from './contexts/ProductsContext'
import { PersonContextProvider } from './contexts/PersonContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PersonContextProvider>
          <ProductsContextProvider>
            <Router />
          </ProductsContextProvider>
        </PersonContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
