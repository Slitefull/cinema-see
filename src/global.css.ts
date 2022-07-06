import { createGlobalStyle, DefaultTheme } from 'styled-components'


export default createGlobalStyle<{ theme: DefaultTheme }>` && {
  body {
    background-color: ${({ theme }) => theme.colors.body.background};
    font-family: 'Montserrat', sans-serif;
    transition: 0.3s;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
  }
}`
