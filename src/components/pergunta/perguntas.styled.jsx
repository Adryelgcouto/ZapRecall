import styled from "styled-components";

export const ContentPergunta = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fb6b6b;
  height: 100vh;
  & div {
    display: flex;
    align-items: center;
    margin-top: 44px;
    img {
      width: 52px;
    }
    h1 {
      color: #ffffff;
      font-size: 36px;
      margin-left: 20px;
    }
  }
`;
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  & div {
    box-sizing: border-box;
    width: 300px;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;

    img {
      width: 20px;
      
    }
  }
`;
