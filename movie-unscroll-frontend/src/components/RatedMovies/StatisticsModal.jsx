import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectLoggedUser } from "../../features/login/loginSlice";
import axios from "axios";

const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(70, 100, 100, 0.7);
  z-index: 5;
  transition: all 0.5s;
  transform-origin: 0% 0%;
  transform: ${({ $active }) => ($active ? "scaleY(1)" : "scaleY(0)")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffac8;
`;

const DataBox = styled.div`
  width: 280px;
  min-height: 100px;
  background-color: black;
  border: 3px solid gold;
  border-radius: 10px;
  box-shadow: 0 0 10px gold;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

function StatisticsModal({ active }) {
  const [data, setData] = useState();
  const loggedUser = useSelector(selectLoggedUser);

  useEffect(() => {
    async function getData() {
      try {
        const config = {
          headers: {
            Authorization: `bearer ${loggedUser.token}`,
          },
        };
        const response = await axios.get(`/api/users/${loggedUser.id}`, config);
        setData(response.data);
      } catch {
        setData("No data");
      }
    }

    if (loggedUser) {
      getData();
    }
  }, [loggedUser]);

  if (!loggedUser) {
    return null;
  }

  return (
    <ModalContainer $active={active}>
      <DataBox>
        <h2 style={{ textAlign: "center", marginBottom: 5, fontSize: 18 }}>
          Your preferences
        </h2>
        {data?.actors?.length && (
          <p>
            Actors:{" "}
            {data?.actors?.map((a) => `${a.name} (${a.count})`).join(", ")}
          </p>
        )}
        {data?.directors?.length && (
          <p>
            Directors:{" "}
            {data?.directors?.map((a) => `${a.name} (${a.count})`).join(", ")}
          </p>
        )}
        {data?.genres?.length && (
          <p>
            Genres:{" "}
            {data?.genres?.map((a) => `${a.name} (${a.count})`).join(", ")}
          </p>
        )}
      </DataBox>
    </ModalContainer>
  );
}

export default StatisticsModal;
