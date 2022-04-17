import { css } from "@emotion/react";

const Index = () => {
  const PLANES = 12;
  const SPOKES = 36;
  const RADIUS = 300;
  const DOT_SIZE = 6;

  const rootStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #333;
  `;

  const mainWrapperStyle = css`
    display: flex;
    position: absolute;
    transform-style: preserve-3d;
    perspective: 400px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    animation: beat 1s linear infinite;
    @keyframes beat {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.75);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  const sphereWrapperStyle = css`
    transform-style: preserve-3d;
    width: ${RADIUS}px;
    height: ${RADIUS}px;
    position: relative;
    animation: rotate3d 10s linear infinite;
    @keyframes rotate3d {
      0% {
        transform: rotate3d(1, 1, 1, 0deg);
      }
      25% {
        transform: rotate3d(1, 1, 1, 90deg);
      }
      50% {
        transform: rotate3d(1, 1, 1, 180deg);
      }
      75% {
        transform: rotate3d(1, 1, 1, 270deg);
      }
      100% {
        transform: rotate3d(1, 1, 1, 360deg);
      }
    }
  `;

  const planeStyle = (planeIndex: number) => css`
    position: absolute;
    transform-style: preserve-3d;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: rotateY(${(180 / PLANES) * (planeIndex + 1)}deg);
  `;

  const spokeStyle = (spokeIndex: number) => css`
    transform-origin: 0 0;
    transform-style: preserve-3d;
    position: absolute;
    left: 50%;
    top: 50%;
    height: ${RADIUS / 2}px;
    width: 0px;
    transform: rotateZ(${(360 / SPOKES) * (spokeIndex + 1)}deg);
  `;

  const dotStyle = css`
    position: absolute;
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: 50%;
    background-color: red;
    left: ${-DOT_SIZE / 2}px;
    top: 100%;
    transform: rotateX(90deg);
  `;

  return (
    <div css={rootStyle}>
      <div css={mainWrapperStyle}>
        <div css={sphereWrapperStyle}>
          {[...Array(PLANES).keys()].map((_, planeIndex) => (
            <div css={planeStyle(planeIndex)}>
              {[...Array(SPOKES).keys()].map((_, spokeIndex) => (
                <div css={spokeStyle(spokeIndex)}>
                  <div css={dotStyle} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
