import styled from "styled-components";

export const PayMethodContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  > select {
    width: 100%;
    background-color: ${(props) => props.theme.button};
    padding: 0.75rem;
    border: 0;
    border-radius: 0.25rem;
    outline: none;
    cursor: pointer;
    appearance: none;
    transition: 0.5s;
    border: 1px solid ${(props) => props.theme.button};

    &:focus {
      border: 1px solid ${(props) => props.theme.purpleDark};
    }
  }

  > select > option {
    color: ${(props) => props.theme.text};
  }

  > button {
    width: 32%;
    gap: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: ${(props) => props.theme.button};
    font-size: x-small;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: baseline;
    cursor: pointer;

    &:active {
      border-color: ${(props) => props.theme.purple};
    }

    &:focus {
      background-color: ${(props) => props.theme.purpleLight};
    }

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
