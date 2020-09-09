import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  heigth: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  color: #444444;
  padding: 15px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const TotalInfo = styled.div`
  width: fit-content;
  max-width: 80%;
  text-align: center;
  font-size: 13px;
  margin: 0 auto;
`;
