import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const Left = styled.button`
  border: none;
  background-color: rgba(255, 0, 0, 1);
  color: gold;
  border-radius: 50%;
  box-shadow: ${({ $disable }) => !$disable && "0 0 10px 0 red"};
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.5s;

  &:active {
    transform: rotateZ(-1080deg);
  }

  &:hover {
    filter: ${({ $disable }) => !$disable && "invert(1)"};
  }
`;

const Right = styled.button`
  border: none;
  background-color: rgba(255, 0, 0, 1);
  color: gold;
  border-radius: 50%;
  box-shadow: ${({ $disable }) => !$disable && "0 0 10px 0 red"};
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.5s;

  &:active {
    transform: rotateZ(1080deg);
  }

  &:hover {
    filter: ${({ $disable }) => !$disable && "invert(1)"};
  }
`;

const Page = styled.p`
  position: relative;
  height: 30px;
  width: 70px;
  padding: 3px;
  background-color: #06736d;
  color: gold;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: all 1s;

  &:hover {
    transform: ${({ $disable }) =>
      $disable && "perspective(100px) rotateX(180deg)"};
  }
`;

const Number = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: perspective(100px) translateZ(5px);
`;

const FirstPage = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: perspective(100px) translateZ(-5px) rotateX(-180deg);
  cursor: pointer;
  font-size: 12px;
`;

function Pagination({ page, setPage, disable }) {
  return (
    <PaginationContainer>
      <Left
        $disable={page === 1}
        onClick={() => setPage((p) => (p < 2 ? 1 : p - 1))}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Left>
      <Page $disable={page !== 1}>
        <Number>Page {page}</Number>
        <FirstPage onClick={() => setPage(1)}>To page 1</FirstPage>
      </Page>
      <Right
        $disable={disable}
        onClick={() => setPage((p) => (disable ? p : p + 1))}
      >
        {" "}
        <FontAwesomeIcon icon={faChevronRight} />
      </Right>
    </PaginationContainer>
  );
}

export default Pagination;
