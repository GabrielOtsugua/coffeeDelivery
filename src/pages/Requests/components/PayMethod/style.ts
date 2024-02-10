import styled from "styled-components";

export const PayMethodContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  > button {
    width: 32%;
    gap: 1rem;
    border: 0;
    border-radius: 4px;
    background-color: ${(props) => props.theme.button};
    font-size: x-small;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: baseline;

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  > button > span {
    color: ${(props) => props.theme.purple};
    margin-right: -8px;
    display: flex;
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
