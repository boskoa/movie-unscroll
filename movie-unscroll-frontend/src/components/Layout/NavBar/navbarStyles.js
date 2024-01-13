import styled, { css, keyframes } from "styled-components";

const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin-right: ${({ $mr }) => $mr ?? "0"};
  margin-left: ${({ $ml }) => $ml ?? "0"};
  flex-shrink: 0;
  font-size: 20px;
  background-color: ${({ $color }) => $color};
  //border: 2px solid rgb(255, 68, 0);
  border-radius: 50%;
  color: ${({ $color2 }) => $color2};
  cursor: pointer;
  box-shadow: ${({ $color, $selected }) =>
    $selected ? `0 0 5px 0 ${$color}` : "none"};
  box-sizing: content-box;
  z-index: 100;
  overflow: hidden;
  transition: 0.1s all;

  &:active {
    box-shadow: 0 0 5px 0 ${({ $color }) => $color};
  }
`;

const slideOption = ($delay) => keyframes`
  0% {
    transform: translateY(0);
    width: 100%;
    border-radius: 50%;
    opacity: 0.5;
  }
  50% {
    transform: translateY(calc(${$delay * 3 * 50}px + 50px));
    width: 100%;
    border-radius: 50%;
    opacity: 1;
  }
  100% {
    transform: translateY(calc(${$delay * 3 * 50}px + 50px));
    width: 70px;
    border-radius: 30px;
    opacity: 1;
  }
`;

const backOption = ($delay) => keyframes`
  0% {
    transform: translateY(calc(${$delay * 3 * 50}px + 50px));
    width: 70px;
    border-radius: 30px;
    opacity: 1;
  }
  50% {
    transform: translateY(calc(${$delay * 3 * 50}px + 50px));
    width: 100%;
    border-radius: 50%;
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    width: 100%;
    border-radius: 50%;
    opacity: 0.5;
  }
`;

const blurOut = keyframes`
  from {
    filter: blur(0px);
  }
  to {
    filter: blur(40px);
  }
`;

const blurIn = keyframes`
  from {
    filter: blur(40px);
  }
  to {
    filter: blur(0px);
  }
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 0;
  right: ${({ $right }) => $right ?? ""};
  left: ${({ $left }) => $left ?? ""};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: ${({ $color }) => $color};
  //transform: translateY(0);
  opacity: 0.3;
  border-radius: 50%;
  box-sizing: content-box;
  color: ${({ $color2 }) => $color2};
  font-weight: 600;
  z-index: -100;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  animation: ${({ $selected, $delay }) =>
    $selected
      ? css`0.5s ${slideOption(
          $delay,
        )} ${$delay}s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`
      : css`0.5s ${backOption(
          $delay,
        )} calc(0.3s + 0.3s - ${$delay}s) cubic-bezier(0.175, 0.885, 0.32, 1.275) both`};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ $color }) => $color};
    filter: blur(0px);
    animation: ${({ $selected, $delay }) =>
      $selected
        ? css`0.8s ${blurOut} calc(0.5s + ${$delay}s) both`
        : css`0.3s ${blurIn} calc(0.3s - ${$delay}s) both`};
  }
`;

const MainIcon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Icon, slideOption, blurOut, MenuIcon, MainIcon };