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
        <h1>Most important title on the page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis rerum
          temporibus, sunt pariatur natus officia reprehenderit tenetur vel
          ducimus! Illum facere porro voluptas reprehenderit voluptatem
          exercitationem dicta distinctio earum sunt.
        </p>
      </div>
      <div css={videoSection}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Learning Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />{" "}
      </div>
    </section>
  );
}
