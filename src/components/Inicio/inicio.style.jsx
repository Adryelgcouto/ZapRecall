import styled from "styled-components";

export const ContentInicio = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background-color: #fb6b6b;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: #ffff;
    font-weight: bold;
    font-size: 36px;
  }
  img {
    margin-bottom:29px ;
    width: 136px;
    height: 161px;
  }
  button {
    width: 246px;
    height: 54px;
    color: #d70900;
    font-size: 18px;
    margin-top: 39px;
    border-radius: 5px;
    border: none;
    
  }
`;
