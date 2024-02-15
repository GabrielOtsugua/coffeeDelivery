import styled from "styled-components";

export const CountContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.button};
  border-radius: 4px;

  > button {
    width: 1.5rem;
    height: 2rem;
    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.purpleDark};
    border: 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  > p {
    width: 1rem;
    height: 2rem;
    background-color: ${(props) => props.theme.button};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
  }
`;
