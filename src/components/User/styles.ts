import styled from "styled-components";

const UserContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
  padding: 0.2em;
  img {
    width: 33%;
  }
  a {
    text-align: left;
    width: 66%;
    overflow-wrap: break-word;
  }
`;

export { UserContainer };
