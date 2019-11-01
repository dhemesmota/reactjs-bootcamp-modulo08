import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0 !important;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    min-height: 100vh;
  }

  html {
    font-size: 65%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #191920;
    -webkit-font-smoothing: antialiased !important;
  }

  #root {

    display: flex;
    justify-content: center;
  }

  body, button, input {
    color: #191920;
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast {
    border-radius: 0.4rem;
  }
`;
