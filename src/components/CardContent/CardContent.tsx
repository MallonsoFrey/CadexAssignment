/** @jsxImportSource @emotion/react */
import Card from "../Card/Card";
import { Button } from "@mui/material";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { contentCoffee } from "../../lib/contentCoffee";

const containerStyle = css`
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cardsGrid = css`
  max-width: 960px;
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
  return (
    <section css={containerStyle}>
      <h1 css={titleStyle}>Coffee Types</h1>
      <div css={cardsGrid}>
        {contentCoffee.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
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
