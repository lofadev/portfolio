import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyled = createGlobalStyle`${css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: 0;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    position: relative;
    background-color: ${({ theme }) => theme.base.bgWrapper};
    color: ${({ theme }) => theme.base.textPrimary};
    font-family: 'Plus Jakarta Sans', serif;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.base.white};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.base.primary};
  }
`}
`;
