import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    html {
      height: 100%;
      font-size: 62.5%;
    }

    body {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      height: 100%;
      margin: 0;
    }

    ::-webkit-input-placeholder {
      font-style: italic;
    }

    ::-moz-placeholder {
      font-style: italic;
    }

    :-ms-input-placeholder {
      font-style: italic;
    }

    :-moz-placeholder {
      font-style: italic;
    }

    #root {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      height: 100%;
    }
  `}
`
