import styled from "styled-components";

const Path1 = styled.path`
  transform-origin: 12% 37%;
  transform: ${({ $selected }) =>
    $selected ? "rotateZ(45deg)" : "rotateZ(0deg)"};
  transition: all 0.5s;
  stroke-linecap: round;
`;

const Path2 = styled.path`
  opacity: ${({ $selected }) => ($selected ? "0" : "1")};
  transition: all 0.5s;
  stroke-linecap: round;
`;

const Path3 = styled.path`
  transform-origin: 16% 68%;
  transform: ${({ $selected }) =>
    $selected ? "rotateZ(-45deg)" : "rotateZ(0deg)"};
  transition: all 0.5s;
  stroke-linecap: round;
`;

function MainMenuIcon({ color, selected }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      width="20px"
      viewBox="0 0 20 20"
    >
      <Path1 $selected={selected} d="M1 4 H19" stroke={color} strokeWidth="2" />
      <Path2
        $selected={selected}
        d="M1 10 H19"
        stroke={color}
        strokeWidth="2"
      />
      <Path3
        $selected={selected}
        d="M1 16 H19"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export default MainMenuIcon;
