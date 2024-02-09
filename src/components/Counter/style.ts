import styled from "styled-components";

export const CountContainer = styled.div`
  width: 4rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.purpleDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: small;

  .minus,
  .plus {
    cursor: pointer;
  }
`;
