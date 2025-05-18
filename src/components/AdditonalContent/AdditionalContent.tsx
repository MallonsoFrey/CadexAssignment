/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const containerStyle = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #fdfaf6;
`;

const titleStyle = css`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

export default function AdditionalContent() {
  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>This is a centered title</h1>
      <Button
        component={Link}
        to="/contact-us"
        variant="contained"
        color="secondary"
      >
        Contact Us
      </Button>
    </div>
  );
}
