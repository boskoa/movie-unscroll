import styled from "styled-components";
import Actor from "./Actor";
import { useEffect, useRef, useState } from "react";

const ActorsContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ActorsFlex = styled.div`
  display: flex;
  gap: 10px;
  width: 200%;
  transition: all 1s;
`;

const Left = styled.button`
  position: absolute;
  top: 50%;
  left: 5px;
`;

function Actors({ actors }) {
  const flexRef = useRef();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    flexRef.current.style.transform = `translateX(${position * -150}px)`;
  }, [position]);

  return (
    <ActorsContainer>
      <ActorsFlex ref={flexRef}>
        {actors.map((a) => (
          <Actor key={a.id} actor={a} />
        ))}
      </ActorsFlex>
      <Left
        onClick={() => {
          setPosition((p) => (p < 5 ? p + 1 : 0));
        }}
      >
        left
      </Left>
    </ActorsContainer>
  );
}

export default Actors;
