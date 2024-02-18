import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  clearError,
  loginUser,
  selectLoggedError,
  selectLoggedUser,
} from "../loginSlice";
import { useEffect } from "react";

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
  z-index: 3;
`;

const InputContainer = styled.div`
  position: relative;
  width: 80%;
`;

const ClapInput = styled.input`
  border: none;
  color: ${({ $color }) => $color};
  border-bottom: 3px solid ${({ $color }) => $color};
  width: 100%;
  background-color: transparent;
  outline: none;
`;

const Error = styled.p`
  position: absolute;
  right: 0px;
  top: 5px;
  height: 70%;
  color: red;
  background-color: black;
  font-size: 10px;
  padding: 0 0 0 5px;
  z-index: 5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 3px solid white;
  padding: 5px 10px;
  cursor: pointer;
`;

const LoginError = styled.p`
  font-size: 10px;
  height: 12px;
  color: red;
  background-color: black;
`;

function LoginForm({ setLogin, setClapDown }) {
  const loggedUser = useSelector(selectLoggedUser);
  const loggedError = useSelector(selectLoggedError);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  function handleLogin(data) {
    dispatch(loginUser(data));
  }

  function handleCancel() {
    setTimeout(() => setLogin(false), 400);
    setClapDown(true);
    dispatch(clearError());
  }

  useEffect(() => {
    if (loggedUser?.username) {
      setTimeout(() => setLogin(false), 400);
      setClapDown(true);
    }
  }, [loggedUser, setClapDown, setLogin]);

  return (
    <FormContainer onSubmit={handleSubmit(handleLogin)}>
      <InputContainer>
        <ClapInput
          $color={errors.username ? "red" : "white"}
          autoFocus
          placeholder="username"
          name="username"
          type="text"
          {...register("username", {
            required: true,
            minLength: {
              value: 2,
              message: "More than 1 character.",
            },
          })}
        />
        <Error>{errors.username?.message}</Error>
      </InputContainer>
      <InputContainer>
        <ClapInput
          $color={errors.password ? "red" : "white"}
          placeholder="password"
          name="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "More than 5 characters.",
            },
          })}
        />
        <Error>{errors.password?.message}</Error>
      </InputContainer>
      <ButtonContainer>
        <Button type="button" onClick={handleCancel}>
          Close
        </Button>
        <Button type="submit">Log in</Button>
      </ButtonContainer>
      <LoginError>{loggedError}</LoginError>
    </FormContainer>
  );
}

export default LoginForm;
