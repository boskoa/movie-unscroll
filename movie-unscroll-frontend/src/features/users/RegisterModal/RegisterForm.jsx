import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { selectLoggedUser } from "../../login/loginSlice";
import { useEffect, useState } from "react";
import {
  clearUsersError,
  createUser,
  selectUsersError,
  selectUsersLoading,
} from "../usersSlice";

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

const RegisterError = styled.p`
  font-size: 10px;
  height: 12px;
  color: red;
  background-color: black;
`;

function RegisterForm({ setRegister, setClapDown }) {
  const [submitted, setSubmitted] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);
  const registerError = useSelector(selectUsersError);
  const registerLoading = useSelector(selectUsersLoading);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  function handleRegister(data) {
    dispatch(createUser(data));
    setSubmitted(true);
  }

  function handleCancel() {
    setTimeout(() => setRegister(false), 400);
    setClapDown(true);
    dispatch(clearUsersError());
  }

  useEffect(() => {
    if (submitted && !registerError && !registerLoading) {
      setTimeout(() => setRegister(false), 400);
      setClapDown(true);
      setSubmitted(false);
    } else if (submitted && registerError && !registerLoading) {
      setSubmitted(false);
    }
  }, [submitted, setClapDown, setRegister, registerError, registerLoading]);

  useEffect(() => {
    if (loggedUser?.username) {
      setTimeout(() => setRegister(false), 400);
      setClapDown(true);
    }
  }, [loggedUser, setClapDown, setRegister]);

  return (
    <FormContainer onSubmit={handleSubmit(handleRegister)}>
      <InputContainer>
        <ClapInput
          $color={errors.name ? "red" : "white"}
          autoFocus
          placeholder="name"
          name="name"
          type="text"
          {...register("name", {
            required: true,
            minLength: {
              value: 2,
              message: "More than 1 character.",
            },
          })}
        />
        <Error>{errors.name?.message}</Error>
      </InputContainer>
      <InputContainer>
        <ClapInput
          $color={errors.username ? "red" : "white"}
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
          $color={errors.email ? "red" : "white"}
          placeholder="email"
          name="email"
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Wrong email format",
            },
          })}
        />
        <Error>{errors.email?.message}</Error>
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
        <Button type="submit">Sign up</Button>
      </ButtonContainer>
      <RegisterError>{registerError}</RegisterError>
    </FormContainer>
  );
}

export default RegisterForm;
