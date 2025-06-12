/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ICoffee {
  title: string;
  description: string;
}

const cardStyle = css`
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Card = ({ title, description }: ICoffee) => {
  return (
    <div css={cardStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
