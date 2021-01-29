import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `

  * {
    box-sizing: border-box;
  }

  body{
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin: 0;
    padding:0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    font-family: 'Oxanium', cursive;
    font-weight: 300;
  }

  header{
    -webkit-box-shadow: 0 0 20px 0 rgb(0 0 0 / 13%);
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 13%);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  ul, ol{
    list-style: none;
  }

  main{
    flex: 1 1 auto;
    width: 100%;
    z-index: 1;
  }

  main,
  section,
  fieldset,
  li {
    display: block;
  }


  button {
    overflow: visible;
    padding:0;
    margin:0;
    border: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
  }

  button,
  input,
  textarea,
  select {
    -webkit-appearance: none;
    -moz-appearance:none;
    padding:0;
    margin:0;
    min-height: 35px;
    :focus {
      outline: 0;
    }
  }

  a{
    text-decoration: none;
    color: initial;
  }

  img{
    display:block;
    width:100%;
    user-drag: none;
    user-select: none;
  }

  .container{
    padding-right: 15px;
    padding-left: 15px;
  }

`
export default GlobalStyles;
