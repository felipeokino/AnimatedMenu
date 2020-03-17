import styled, { css, keyframes } from "styled-components";

const openMenu = (x, y) =>
  keyframes`
    from {
      transform: translate(${0}px, ${0}px);
    } to {
      transform: translate(${x}px, ${y}px);
    }
  `;

const closeMenu = (x, y) =>
  keyframes`
    from {
      transform: translate(${x}px, ${y}px);
    } to {
      transform: translate(${0}px, ${0}px);
    }
  `;

const rotateButton = open => {
  return open
    ? keyframes`
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(45deg);
    }
  `
    : keyframes`
    from {
      transform: rotate(45deg);
    } to {
      transform: rotate(0deg);
    }
  `;
};

export const Item = styled.div`
  position: absolute;
  background: purple;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  color: #fff;
  ${({ rotate, open }) =>
    rotate &&
    css`
      animation: ${rotateButton(open)} 0.5s forwards;
    `};
  ${({ x, y, open, delay, rotate }) =>
    open
      ? css`
          animation: ${openMenu(x, y)} ${delay}s forwards;
        `
      : css`
          animation: ${closeMenu(x, y)} ${delay}s backwards;
        `};
`;
