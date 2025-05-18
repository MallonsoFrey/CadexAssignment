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
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
      }
    `}
  />
);

export default GlobalStyles;
