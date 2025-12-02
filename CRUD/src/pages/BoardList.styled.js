import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  text-align: center;
  margin: 50px auto;
  font-family: Arial, sans-serif;
`;

export const WriteBox = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 15px;
  background: #4f8cff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

export const List = styled.div`
  margin-top: 20px;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto 15px auto;
  cursor: pointer;
  text-align: left;
  width: 60%;
`;

export const BtnBox = styled.div`
  margin-top: 10px;
`;

export const EditBtn = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
`;

export const HomeLinkWrapper = styled.div`
  padding: 20px;
`;
