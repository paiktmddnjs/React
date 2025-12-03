import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  text-align: center;
  margin: 50px auto;
  font-family: Arial, sans-serif;
`;

export const WriteBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 15px;
  border: solid 1px black;
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
  width: 60%;

  /* 내부 요소 정렬용 */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;   /* ⭐ 오른쪽 끝으로 붙인다 */
`;

export const DateText = styled.p`
  margin: 0;
  color: #555;
  font-size: 14px;
`;

export const HomeLinkWrapper = styled.div`
  padding: 20px;
`;
