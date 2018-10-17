import styled, { injectGlobal } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

injectGlobal`
  html {
    height: 100%;
    width: 100%;
  }
  
  body {
    min-height: 100%;
    position: relative;
    color: #032740;
  }
  
  * {
    padding: 0;
    margin: 0;
    text-size-adjust: none;
  }
  
  *, *:after, *:before {
    box-sizing: border-box;
  }
  
  /* Формы */
  input, textarea, button {
  
  }
  
  /* Аккуратные таблицы */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* Основные стили */
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 20px;
    -webkit-font-smoothing: antialiased;   
  }
  
  /* Ссылки без дефолтного подчёркивания */
  a {
    text-decoration: none;
  }
  
  h1 {
    line-height: 38px;
    font-size: 38px;
    font-weight: 400;
  }
  
  h2, .h2 { 
    font-size: 30px;
    line-height: 39px;
    font-weight: 400;
  }
  
  h5 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
  
  hr {
    background: #EAEFF8;
    appearance: none;
    border: none;
    margin: 20px 0 16px;
    display: block;
    height: 1px;
  }
`;
