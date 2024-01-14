import styled from "styled-components";
import Title from "../../../components/Title";
import InputField from "./InputField";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../login/loginSlice";
import Avatar from "./Avatar";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px 150px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function UpdateUser() {
  const loggedUser = useSelector(selectLoggedUser);

  if (!loggedUser) {
    return "Not authorized";
  }

  return (
    <>
      <Title text="User settings" />
      <MainContainer>
        <Avatar loggedUser={loggedUser} />
        <InputsContainer>
          <InputField />
          <InputField />
          <InputField />
        </InputsContainer>
      </MainContainer>
    </>
  );
}

export default UpdateUser;
