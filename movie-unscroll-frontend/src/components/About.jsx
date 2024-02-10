import styled, { css, keyframes } from "styled-components";
import Title from "./Title";
import { useEffect, useState } from "react";

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  //margin-bottom: 10vh;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const Moto = styled.div`
  z-index: 2;
  padding: 20px 0 90px 0;
  color: #050400;
`;

const lightMove = keyframes`
  0% {
    opacity: 0;
    transform: translate(20vw, 0vh);
  }
  10% {
    opacity: 0;
    transform: translate(20vw, 0vh);
  }
  18% {
    opacity: 0.6;
    transform: translate(20vw, 0vh);
  }
  21% {
    opacity: 0.5;
    transform: translate(20vw, 0vh);
  }
  25% {
    opacity: 0.8;
    transform: translate(20vw, 0vh);
  }
  28% {
    opacity: 0.6;
    transform: translate(20vw, 0vh);
  }
  32% {
    opacity: 1;
    transform: translate(20vw, 0vh);
  }
  45% {
    opacity: 1;
    transform: translate(80vw, 10vh);
  }
  60% {
    opacity: 1;
    transform: translate(20vw, 17vh);
  }
  75% {
    opacity: 1;
    transform: translate(50vw, 24vh);
  }
  90% {
    opacity: 1;
    transform: translate(80vw, 17vh);
  }
  100% {
    opacity: 0;
    transform: translate(110vw, 10vh);
  }
`;

const Light = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vw;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #fffac8;
  box-shadow: 0 0 6px 0 #fffac8;
  backdrop-filter: invert(0);
  animation: ${() => css`8s ${lightMove} linear forwards`};
`;

const lightUp = keyframes`
  0% {
    filter: brightness(0);
    text-shadow: none;
  }
  40% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  41% {
    filter: brightness(0.8);
    text-shadow: 0 0 10px #ffcc00;
  }
  42% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  50% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  51% {
    filter: brightness(0.8);
    text-shadow: 0 0 10px #ffcc00;
  }
  52% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  54% {
    filter: brightness(0.9);
    text-shadow: 0 0 10px #ffcc00;
  }
  55% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
  100% {
    filter: brightness(1);
    text-shadow: 0 0 10px #ffcc00;
  }
`;

const Text = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-shadow: none;
  opacity: 1;
  color: #ffcc00;
  text-align: center;
  filter: brightness(0);
  animation: ${({ $delay }) => css`4s ${lightUp} ${$delay} forwards`};

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const sectionIntro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.p`
  opacity: 0;
  padding: 10px 20px;
  font-size: 14px;
  text-align: start;
  color: #fffac8;
  width: 100%;
  animation: ${() => css`2s ${sectionIntro} 30s linear forwards`};
`;

function About() {
  const [showTitle, setShowTitile] = useState(false);

  useEffect(() => {
    const index = setTimeout(() => setShowTitile(true), 34000);

    return () => clearTimeout(index);
  }, []);

  return (
    <AboutContainer>
      {/* <Text $delay="2s">Tired of endless scrolling</Text>
      <Text $delay="8s">in search of something good to watch?</Text>
      <Text $delay="14s">And stil ending up watching crap?</Text>
      <Text $delay="20s">Remove the scrolling part</Text>
      <Text $delay="28s">and watch crap straight away!</Text> */}
      <Title text="About" $show={showTitle} />
      <ContentContainer>
        <Moto>
          <Text $delay="8s">Tired of endless scrolling</Text>
          <Text $delay="12s">in search of something good to watch?</Text>
          <Text $delay="16s">And stil ending up watching crap?</Text>
          <Text $delay="20s">Remove the scrolling part</Text>
          <Text $delay="26s">and watch crap straight away!</Text>
        </Moto>
        <Light />
        <Section>
          Put your trust in popular opinion and go for default, random pick.
        </Section>
        <Section>
          Or rate some movies, and get customized recommendation based on your
          actors or direstor preferences.
        </Section>
        <Section>Or use many filters to narrow your search down.</Section>
        <Section>
          You can also use existing trending, popular or best rated lists to
          find something to watch.
        </Section>
      </ContentContainer>
    </AboutContainer>
  );
}

export default About;
