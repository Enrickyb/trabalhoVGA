import styled from "styled-components";

const index = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: baseline;
  margin-left: 75px;
  position: relative;
 
  div {
    width: 50vw;

    h1 {
      font-size: 50px;
      font-weight: bold;
    }
    p {
      font-size: 22px;
      width: 55%;
      margin-top: 0;
    }
    div {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: start;
      margin-top: 40px;
      margin-bottom: 50px;
    }
  }
  img:nth-child(2) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40%;
  }
  @media (max-width: 1320px) {
    justify-content: center;
    div {
      width: 90vw;
      margin-right: 0px;
      h1 {
        font-size: 40px;
      }
      p {
        width: 80%;
      }
    }
    img:nth-child(2) {
      display: none;
    }
    button {
      margin-top: 0;
      margin-bottom: 50px;
    }
  }
`;
const downButton = styled.button`
  background-color: transparent;
  color: #0318d3;
  border: #0318d3 solid 1px;
  position: relative;
  font-size: 18px;
  font-weight: 540;
  padding: 17px 67px 17px 35px;
  border-radius: 5px;
  :hover {
    background-color: transparent;
    color: #0318d3;
    cursor: pointer;
  }
  img {
    position: absolute;
    right: 36px;
    top: 15px;

    width: 20px;
  }
`;
const mainButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #0318d3;
  color: white;
  font-size: 18px;
  font-weight: 540;
  padding: 17px 54px;
  border-radius: 5px;

  cursor: pointer;
  :hover {
    background-color: gray;
    color: white;
  }
`;

export { index, mainButton, downButton };
