import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
}

h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontFSize}; 
}

h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontFSize}; 
}

h3 {
    font-size: ${({ theme }) => theme.typography.h3.fontFSize}; 
}

h4 {
    font-size: ${({ theme }) => theme.typography.h4.fontFSize}; 
}

h6 {
    font-size: ${({ theme }) => theme.typography.h6.fontFSize};
    font-weight: ${({ theme }) => theme.typography.h6.fontWeight};  
}

em {
    font-size: ${({ theme }) => theme.typography.em.fontFSize}; 
}
`

export default GlobalStyles; 

