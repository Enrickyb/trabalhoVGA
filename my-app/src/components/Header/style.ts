import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 17px;
  padding: 58px 75px;
  img {
    cursor: pointer;
  }
  h1 {
    font-size: 22px;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    padding: 58px 15px 58px 75px;
  }
  @media (max-width: 500px) {
    padding: 58px 10px 58px 50px;
  }
  @media (max-width: 500px) {
    padding: 15px 10px 58px 50px;
  }
`;
export { Header };
