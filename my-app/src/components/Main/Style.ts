import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
const Title = styled.h1``;

const Forms = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  margin: 30px;
  div {
    display: flex;
  }
  input {
    width: 30px;
    border: none;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

export { Main, Title, Forms };
