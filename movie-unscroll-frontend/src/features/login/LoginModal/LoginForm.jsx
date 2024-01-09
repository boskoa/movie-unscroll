import styled from "styled-components";

const FormContainer = styled.form`
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 99%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid lime;
  z-index: 3;
`;

const ClapInput = styled.input`
  border: none;
  color: white;
  border-bottom: 3px solid white;
  width: 80%;
  background-color: transparent;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const Button = styled.button``;

function LoginForm({ setLogin }) {
  return (
    <FormContainer>
      <ClapInput placeholder="username" />
      <ClapInput placeholder="password" />
      <ButtonContainer>
        <Button onClick={() => setLogin(false)}>cancel</Button>
        <Button>Log in</Button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default LoginForm;
