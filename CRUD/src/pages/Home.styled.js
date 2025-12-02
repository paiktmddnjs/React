import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f7f7f7;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled(Link)`
  padding: 12px 20px;
  background-color: #4f8cff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #3d70cc;
  }
`;
