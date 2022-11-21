import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Poppins', sans-serif;
    background-color: #ddd;
  }
  body

  .Toastify
  .Toastify__toast-container
  .Toastify__toast--success{
    color: #fff;
    background-color: green;
  }
  body
  .Toastify
  .Toastify__toast-container
  .Toastify__toast--error{
    color: #fff;
    background-color: red;
  }
`;

export default GlobalStyle;
