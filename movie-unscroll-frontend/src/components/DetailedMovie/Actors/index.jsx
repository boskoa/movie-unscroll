import styled from "styled-components";
import Actor from "./Actor";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const ActorsContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ActorsFlex = styled.div`
  display: flex;
  transition: all 1s;
`;

const Left = styled.button`
  position: absolute;
  top: 50%;
  left: 5px;
`;

const Right = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
`;

function Actors({ actors }) {
  const containerRef = useRef();
  const flexRef = useRef();
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    if (flexRef.current) {
      if (width > 600) {
        flexRef.current.style.transform = `translateX(${
          (position * -width) / 5
        }px)`;
      } else if (width > 400) {
        flexRef.current.style.transform = `translateX(${
          (position * -width) / 3
        }px)`;
      } else {
        flexRef.current.style.transform = `translateX(${
          (position * -width) / 2
        }px)`;
      }
    }
    console.log(window.innerWidth, width);
  }, [position, width]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(containerRef.current.clientWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ActorsContainer
      ref={containerRef}
      onTouchStart={(e) => {
        setStart(e.targetTouches[0].clientX);
      }}
      onTouchEnd={() => {
        if (start - end > 30) {
          if (width > 600) {
            setPosition((p) => (p < 5 ? p + 1 : 0));
          } else if (width > 400) {
            setPosition((p) => (p < 7 ? p + 1 : 0));
          } else {
            setPosition((p) => (p < 8 ? p + 1 : 0));
          }
        } else if (start - end < -30) {
          if (width > 600) {
            setPosition((p) => (p > 0 ? p - 1 : 5));
          } else if (width > 400) {
            setPosition((p) => (p > 0 ? p - 1 : 7));
          } else {
            setPosition((p) => (p > 0 ? p - 1 : 8));
          }
        }
      }}
      onTouchMove={(e) => {
        setEnd(e.targetTouches[0].clientX);
      }}
      onMouseDown={(e) => {
        setStart(e.pageX);
      }}
      onMouseUp={() => {
        if (start - end > 30) {
          if (width > 600) {
            setPosition((p) => (p < 5 ? p + 1 : 0));
          } else if (width > 400) {
            setPosition((p) => (p < 7 ? p + 1 : 0));
          } else {
            setPosition((p) => (p < 8 ? p + 1 : 0));
          }
        } else if (start - end < -30) {
          if (width > 600) {
            setPosition((p) => (p > 0 ? p - 1 : 5));
          } else if (width > 400) {
            setPosition((p) => (p > 0 ? p - 1 : 7));
          } else {
            setPosition((p) => (p > 0 ? p - 1 : 8));
          }
        }
      }}
      onMouseMove={(e) => {
        setEnd(e.pageX);
      }}
    >
      <ActorsFlex ref={flexRef}>
        {actors.map((a) => (
          <Actor key={a.id} actor={a} elementWidth={width} />
        ))}
      </ActorsFlex>
      <Left
        onClick={() => {
          if (width > 600) {
            setPosition((p) => (p < 5 ? p + 1 : 0));
          } else if (width > 400) {
            setPosition((p) => (p < 7 ? p + 1 : 0));
          } else {
            setPosition((p) => (p < 8 ? p + 1 : 0));
          }
        }}
      >
        left
      </Left>

      <Right
        onClick={() => {
          if (width > 600) {
            setPosition((p) => (p > 0 ? p - 1 : 5));
          } else if (width > 400) {
            setPosition((p) => (p > 0 ? p - 1 : 7));
          } else {
            setPosition((p) => (p > 0 ? p - 1 : 8));
          }
        }}
      >
        right
      </Right>
    </ActorsContainer>
  );
}

export default Actors;
