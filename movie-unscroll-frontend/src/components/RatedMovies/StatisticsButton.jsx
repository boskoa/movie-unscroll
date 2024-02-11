import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ButtonContainer = styled.button`
  all: unset;
  position: fixed;
  right: 10px;
  bottom: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: black;
  color: #fffac8;
  box-shadow: 0 0 10px #fffac8;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;

  &:active {
    box-shadow: 0 0 0px #fffac8;
    transform: scale(0.97);
  }
`;

function StatisticsButton({ setActive }) {
  return (
    <ButtonContainer
      type="button"
      onClick={() => setActive((p) => !p)}
      title="Statistics"
    >
      <FontAwesomeIcon icon={faChartSimple} style={{ fontSize: 30 }} />
    </ButtonContainer>
  );
}

export default StatisticsButton;
