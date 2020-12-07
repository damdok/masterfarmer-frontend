import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    //background-color: var(--white);
    color: var(--white);
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --black: #130f0d;
    --primary: #fd951f;
    --white: #f0f0f9;
  }
`;
