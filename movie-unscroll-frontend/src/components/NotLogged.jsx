import styled from "styled-components";

const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  font-size: 26px;
  color: gold;
`;

function NotLogged() {
  return <Container>Please, log in.</Container>;
}

export default NotLogged;
