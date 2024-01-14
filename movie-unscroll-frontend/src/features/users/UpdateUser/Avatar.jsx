import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 30px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 5px;
  width: 100%;
`;

const Button = styled.div`
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

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: relative;
  border-radius: 10px;
  height: 200px;
  width: 200px;
  display: block;
  object-fit: cover;
  z-index: 1;
`;

const ImageGlow = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  height: 200px;
  width: 200px;
  display: block;
  object-fit: cover;
  filter: blur(20px);
  z-index: 0;
`;

function Avatar({ loggedUser }) {
  const [name, setName] = useState("Choose avatar");
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);

    await axios.post(`/api/avatars/${loggedUser.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${loggedUser.token}`,
      },
    });

    window.location.reload();
  }

  return (
    <Container>
      <ImageContainer>
        <ImageGlow
          alt="chosen avatar"
          src={
            file
              ? URL.createObjectURL(file)
              : `/public/uploads/avatars/${loggedUser.id}.webp`
          }
          onError={(e) => {
            e.currentTarget.src = "/public/user.jpg";
            e.currentTarget.height = "28";
            e.currentTarget.width = "28";
          }}
        />
        <Image
          alt="chosen avatar"
          src={
            file
              ? URL.createObjectURL(file)
              : `/public/uploads/avatars/${loggedUser.id}.webp`
          }
          onError={(e) => {
            e.currentTarget.src = "/public/user.jpg";
            e.currentTarget.height = "28";
            e.currentTarget.width = "28";
          }}
        />
      </ImageContainer>
      <Form id="avatar-form" encType="multipart/form-data">
        <label htmlFor="avatar" style={{ maxWidth: "70%" }}>
          <input
            style={{
              display: "none",
            }}
            id="avatar"
            type="file"
            name="avatar"
            onChange={(e) => {
              setName(loggedUser.id);
              setFile(e.target.files[0]);
            }}
          />
          <Button>Choose image</Button>
        </label>
        <Button type="submit" disabled={!file} onClick={(e) => handleSubmit(e)}>
          Set
        </Button>
      </Form>
    </Container>
  );
}

export default Avatar;
