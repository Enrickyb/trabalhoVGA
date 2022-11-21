import styled from "styled-components";

const index = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

  div {
    width: 50vw;
    margin-left: 75px;
    h1 {
      font-size: 50px;
      font-weight: bold;
    }
    p {
      font-size: 22px;
      width: 55%;
      margin-top: 0;
    }

    button {
      border: none;
      border-radius: 10px;
      background-color: #0318d3;
      color: white;
      font-size: 18px;
      font-weight: 540;
      padding: 17px 54px;
      border-radius: 5px;
      margin-top: 57px;

      cursor: pointer;
      :hover {
        background-color: gray;
        color: white;
      }
    }
  }
  img {
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
      h1{
        font-size: 40px;
      }
      p{
        width: 80%;
      }
    }
    img {
      display: none;
    }
    button{
      margin-top: 0;
      margin-bottom: 50px;
    }
  }
`;

export { index };
