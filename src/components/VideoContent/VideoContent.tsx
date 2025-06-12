/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const container = css`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const textSection = css`
  flex: 1;

  > h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const videoSection = css`
  flex: 1;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  width: 100%;

  .lyt-embed {
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
`;

export default function VideoContent() {
  return (
    <section css={container}>
      <div css={textSection}>
        <h1>What the Coffee</h1>
        <p>Ever wonder what makes your morning cup so magical?</p>
        <p>
          Whether you're team espresso, latte, or cold brew, you're in the right
          place. Welcome to the weird, wonderful, and wildly caffeinated world
          of coffee.
        </p>
      </div>
      <div css={videoSection}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/watch?v=N6BJVM5tvnw&pp=ygUMI2N1cnZlY2FmZmVl"
          title="Learning Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
