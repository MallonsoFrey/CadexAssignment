import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html,
      body {
        height: 100%;
        min-height: 100vh;
        font-family: "Roboto", sans-serif;
        background-color: #fafafa;
        display: flex;
        flex-direction: column;
      }

      main {
        flex-grow: 1;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
      }
    `}
  />
);

export default GlobalStyles;
