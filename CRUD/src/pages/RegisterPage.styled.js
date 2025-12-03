import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(56, 48, 48, 0.1);
  background-color: #ecececff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  text-align: center;
  color: #002fffff;
  margin-bottom: 30px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #5e46caff;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #5e46caff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #ff8533;
  }
`;
