import styled from "styled-components";

const Path1 = styled.path`
  transform-origin: 17% 32%;
  transform: ${({ $selected }) =>
    $selected ? "rotateZ(45deg)" : "rotateZ(0deg)"};
  transition: all 0.5s;
`;

const Path2 = styled.path`
  opacity: ${({ $selected }) => ($selected ? "0" : "1")};
  transition: all 0.5s;
`;

const Path3 = styled.path`
  transform-origin: 10% 65%;
  transform: ${({ $selected }) =>
    $selected ? "rotateZ(-45deg)" : "rotateZ(0deg)"};
  transition: all 0.5s;
`;

function MainMenuIcon({ color, selected }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      width="20px"
      viewBox="0 0 20 20"
    >
      <Path1 $selected={selected} d="M0 4 H20" stroke={color} strokeWidth="2" />
      <Path2
        $selected={selected}
        d="M0 10 H20"
        stroke={color}
        strokeWidth="2"
      />
      <Path3
        $selected={selected}
        d="M0 16 H20"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export default MainMenuIcon;
