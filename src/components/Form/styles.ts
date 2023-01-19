import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  form {
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 2rem;

    input {
      width: 50%;
    }
    button {
      padding: 0.5rem;
    }
  }
`;

export { FormContainer };
