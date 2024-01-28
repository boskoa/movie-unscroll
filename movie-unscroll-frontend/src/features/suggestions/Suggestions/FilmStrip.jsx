import styled from "styled-components";

const StripContainer = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  max-width: 800px;
  border: 1px solid lime;
`;

function FilmStrip({ titles }) {
  return <StripContainer />;
}

export default FilmStrip;
