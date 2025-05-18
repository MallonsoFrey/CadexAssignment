/** @jsxImportSource @emotion/react */
import Card from "../Card/Card";
import { Button } from "@mui/material";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const containerStyle = css`
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cardsGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const titleStyle = css`
  margin-bottom: 1rem;
  font-weight: 700;
`;

const buttonStyle = css`
  display: block;
  margin: 2rem auto 0;
`;

const CardContent = () => {
  const cards = Array.from({ length: 6 });

  return (
    <section css={containerStyle}>
      <h1 css={titleStyle}>Also Very Important Title</h1>
      <div css={cardsGrid}>
        {cards.map((_, index) => (
          <Card key={index} />
        ))}
      </div>
      <Button
        component={Link}
        to="/contact-us"
        css={buttonStyle}
        variant="contained"
        color="secondary"
      >
        Contact Us
      </Button>
    </section>
  );
};

export default CardContent;
