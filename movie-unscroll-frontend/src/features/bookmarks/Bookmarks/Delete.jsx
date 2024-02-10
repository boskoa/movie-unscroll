import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectLoggedUser } from "../../login/loginSlice";
import { removeBookmark } from "../bookmarksSlice";

const DeleteContainer = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: gold;
  padding: 4px;
  mix-blend-mode: exclusion;
  transform: rotateZ(-10deg);
`;

const IconContainer = styled.div`
  position: absolute;
  top: -3px;
  right: -3px;
  height: 26px;
  width: 26px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: rotateZ(-10deg);
  transition: transform 0.3s;

  &:active {
    transform: rotateZ(-360deg);
  }
`;

function Delete({ id }) {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectLoggedUser);

  return (
    <>
      <DeleteContainer />
      <IconContainer
        onClick={() =>
          dispatch(removeBookmark({ token: loggedUser.token, id }))
        }
      >
        <FontAwesomeIcon
          style={{ fontSize: "18px", color: "gold" }}
          icon={faTrashCan}
        />
      </IconContainer>
    </>
  );
}

export default Delete;
