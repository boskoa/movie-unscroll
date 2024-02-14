import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputField from "./InputField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectLoggedUser } from "../../login/loginSlice";
import {
  clearUsersError,
  getUser,
  selectUserById,
  selectUsersError,
  selectUsersLoading,
  updateUser,
} from "../usersSlice";

const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: rgb(255, 68, 0);
  color: gold;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  padding: 5px;
  min-width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  &:active {
    box-shadow: 0 0 10px 0 rgb(255, 68, 0);
  }
`;

const UpdateError = styled.p`
  position: absolute;
  top: -120%;
  width: 100%;
  height: 30px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $error }) => ($error ? 1 : 0)};
  color: red;
  border: 2px solid red;
  border-radius: 5px;
  box-shadow:
    0 0 5px 0 red,
    inset 0 0 5px 0 red;
  text-shadow: 0 0 3px red;
  transition: all 0.4s;
`;

function UpdateForm() {
  const [submitted, setSubmitted] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);
  const user = useSelector((state) => selectUserById(state, loggedUser.id));
  const userError = useSelector(selectUsersError);
  const userLoading = useSelector(selectUsersLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  function handleUpdate(data) {
    dispatch(clearUsersError());
    dispatch(
      updateUser({ id: loggedUser.id, token: loggedUser.token, newData: data }),
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 600);
  }

  useEffect(() => {
    if (submitted && !userError && !userLoading) {
      navigate(-1, { replace: true });
    }
  }, [submitted, userError, userLoading, navigate, dispatch]);

  useEffect(() => {
    dispatch(getUser({ token: loggedUser.token, id: loggedUser.id }));
  }, [dispatch, loggedUser]);

  if (!user?.id) {
    return "Loading...";
  }

  const name = {
    ...register("name", {
      required: true,
      minLength: {
        value: 2,
        message: "More than 1 character.",
      },
    }),
    placeholder: "name",
    name: "name",
    type: "text",
    defaultValue: user.name,
  };

  const username = {
    ...register("username", {
      required: true,
      minLength: {
        value: 2,
        message: "More than 1 character.",
      },
    }),
    placeholder: "username",
    name: "username",
    type: "text",
    defaultValue: user.username,
  };

  const email = {
    ...register("email", {
      required: true,
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Wrong email format",
      },
    }),
    placeholder: "email",
    name: "email",
    type: "email",
    defaultValue: user.email,
  };

  const password = {
    ...register("password", {
      minLength: {
        value: 6,
        message: "More than 5 characters.",
      },
    }),
    placeholder: "password",
    name: "password",
    type: "password",
  };

  return (
    <InputsContainer onSubmit={handleSubmit(handleUpdate)}>
      <InputField params={name} error={errors.name?.message} />
      <InputField params={username} error={errors.username?.message} />
      <InputField params={email} error={errors.email?.message} />
      <InputField params={password} error={errors.password?.message} />
      <ButtonContainer>
        <Button type="button" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button type="submit">Update</Button>
        <UpdateError $error={userError?.length}>{userError}</UpdateError>
      </ButtonContainer>
    </InputsContainer>
  );
}

export default UpdateForm;
