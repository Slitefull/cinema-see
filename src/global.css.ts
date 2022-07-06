import { createGlobalStyle } from 'styled-components'
import { Theme } from "@/themes/types";


export default createGlobalStyle<{ theme: Theme }>` && {
  body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Montserrat', sans-serif;
    transition: 0.3s;
  }
}`
