import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const MainContainer = styled.div`
  height: 60vh;
  max-width: 800px;
  border: 1px solid teal;
`;

function Section({ title }) {
  return (
    <MainContainer>
      <SectionTitle title={title} />
    </MainContainer>
  );
}

export default Section;
