// src/pages/WriteBoard.styled.jsx
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
`;

export const FormBox = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #4f8cff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #3d70cc;
  }
`;

export const SmallButton = styled(Button)`
  margin-right: 10px;
  padding: 5px 10px;
`;

export const DeleteButton = styled(Button)`
  background-color: #ff4d4d;
`;

export const PostCard = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;
