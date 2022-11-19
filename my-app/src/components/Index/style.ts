import styled from "styled-components";

const index = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  margin-left: 75px;
  div{
    width: 50vw;
  h1 {
    font-size: 50px;
    font-weight: bold;
  }
  p{
    font-size: 22px;
    width: 70%;
    margin-bottom: 57px;
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
    
    cursor: pointer;
    :hover {
      background-color: gray;
      color: white;
    }
    
  }
}
  img{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40%;
    
  }
`;

export { index };
