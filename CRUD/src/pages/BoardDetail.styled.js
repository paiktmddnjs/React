import styled from "styled-components";
import { Link } from "react-router-dom";

export  const Wrapper = styled.div`
  display: flex;
  justify-content: center;   /* 수평 중앙 */
  align-items: center;       /* 수직 중앙 */
  height: 100vh;             /* 화면 전체 높이 */
  background: #f0f4f8;
`;

export  const Content = styled.div`
  text-align: center;
  padding: 40px;
  border: 2px solid #ccc;
  border-radius: 15px;
  width: 50%;
  background: #fff;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
`;

export  const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
`;

export  const Text = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;
  color: #555;
`;

export  const BtnGroup = styled.div`
  margin-bottom: 20px;
`;

export  const EditButton = styled.button`
  padding: 8px 15px;
  background-color: #4f8cff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export  const DeleteButton = styled.button`
  padding: 8px 15px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

export  const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #4f8cff;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
