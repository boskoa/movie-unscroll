import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Content from "./Content";

const MainContainer = styled.div`
  height: 60vh;
  max-width: 800px;
  display: flex;
  border: 1px solid gold;
  box-sizing: content-box;
  position: relative;
`;

function Section({ title, movies }) {
  return (
    <MainContainer>
      <SectionTitle title={title} />
      <div
        style={{
          height: 30,
          width: 30,
          position: "absolute",
          top: 40,
          backgroundColor: "red",
          zIndex: 0,
        }}
      />
      <Content movies={movies} />
    </MainContainer>
  );
}

export default Section;
