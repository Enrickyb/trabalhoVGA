import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  margin-left: 75px;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40%;
  }
  @media (max-width: 1320px) {
    justify-content: center;
    img {
      display: none;
    }
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  width: 100vw;
`;
const Results = styled.div`
  margin-left: 55px;
  margin-top: 30px;
  p {
    font-size: 22px;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  width: 40vw;
  @media (max-width: 1320px) {
    width: 100vw;
  }
`;

const Forms = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  border: 1px solid #d9d5d5;
  padding: 15px 70px;
  border-radius: 5px;
  div {
    display: flex;
  }
  input {
    width: 20px;
    border: none;
    border: none;
    :focus {
      outline: none;
    }
  }

  div {
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  button:first-child {
    background-color: #0318d3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 25px;
    transition: all 0.3s ease-in-out;
    :hover {
      cursor: pointer;
      background-color: gray;
    }
  }
  button:last-child {
    border: solid 1px #0318d3;
    background-color: transparent;
    color: #0318d3;
    padding: 10px 35px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    :hover {
      cursor: pointer;
      background-color: #0318d3;
      color: white;
    }
  }
  @media (max-width: 500px) {
    margin-right: 20px;
  }
`;
const formsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 17px;
  button {
    background-color: #0318d3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px;
    transition: all 0.3s ease-in-out;
    :hover {
      cursor: pointer;
      background-color: gray;
    }
  }
`;

export { Main, Title, Forms, Buttons, Wrapper, formsWrapper, Results };
