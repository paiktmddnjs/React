import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height : 100vw;

  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #7e7676ff;

`;

export const Title = styled.h1`
  font-size: 36px;
  color : black;
  margin-bottom: 20px;
`;


export const Desc = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom : 10px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Button = styled(Link)`
  padding: 10px 18px;
  background-color: #4f8cff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #bec8dbff;
  }
`;
