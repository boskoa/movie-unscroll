import styled, { css, keyframes } from "styled-components";
import Title from "../../../components/Title";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../login/loginSlice";
import Avatar from "./Avatar";
import UpdateForm from "./UpdateForm";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const UpdateContainer = styled.div`
  opacity: 0;
  max-width: 100%;
  overflow: hidden;
  animation: ${() => css`1s ${appear} 1s forwards`};
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px 150px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

function UpdateUser() {
  const loggedUser = useSelector(selectLoggedUser);

  if (!loggedUser?.id) {
    return <h2>Not authorized</h2>;
  }

  return (
    <UpdateContainer>
      <Title text="User settings" />
      <MainContainer>
        <Avatar loggedUser={loggedUser} />
        <UpdateForm />
      </MainContainer>
    </UpdateContainer>
  );
}

export default UpdateUser;
