// src/pages/WriteBoard.styled.jsx
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
 
  width: 700px;

  text-align : center;
  box-sizing: border-box;  /* 부모도 border-box 적용 */

  font-family: Arial, sans-serif;
`;

export const FormBox = styled.div`
  border: solid 6px white;
  border-radius: 20px;
  padding: 10px;
  width: 400px;
  margin: 20px auto;   /* 중앙 정렬 핵심 */
`;


export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;  /* 핵심 */
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  max-height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  height: 100px;
  box-sizing: border-box;  /* 핵심 */
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #5089f5ff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #206af3ff;
  }
`;

export const SmallButton = styled(Button)`
  margin-right: 10px;
  padding: 5px 10px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;  /* 핵심 */
 margin-bottom : 10px;
  &:focus {
    outline: none;
    border-color: #350ee2ff;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
`;
