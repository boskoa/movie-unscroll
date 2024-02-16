import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const trailerIntro = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(24, 39, 39, 0.8);
  z-index: 20;
  transition: all 0.5s;
  animation: ${() => css`0.5s ${trailerIntro} forwards`};
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffac8;
`;

const Video = styled.iframe`
  border: none;
`;

function TrailerModal({ video, setTrailer }) {
  const iframeRef = useRef();
  const containerRef = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (document.body.clientWidth > 600) {
      setWidth(560);
      setHeight(315);
    } else {
      setWidth(280);
      setHeight(158);
    }
  }, []);

  useEffect(() => {
    function clickAway(e) {
      if (iframeRef.current && !iframeRef.current.contains(e.target)) {
        setTrailer(false);
      }
    }

    const element = containerRef.current;

    element.addEventListener("click", clickAway);

    return () => element.removeEventListener("click", clickAway);
  }, [setTrailer]);

  return (
    <ModalContainer ref={containerRef}>
      <Video
        ref={iframeRef}
        width={width}
        height={height}
        src={`https://www.youtube-nocookie.com/embed/${video.key}`}
        title={video.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media"
        allowFullScreen
      ></Video>
    </ModalContainer>
  );
}

export default TrailerModal;
