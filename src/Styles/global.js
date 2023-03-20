import { css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  button {
    border: none;
  }
  input {
    border: none;
    :focus-visible {
      outline: none;
    }
  }
`;

export default globalStyles;
