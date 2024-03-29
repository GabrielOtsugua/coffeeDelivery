import styled from "styled-components";

export const RequestContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.button};
  padding-bottom: 1.5rem;

  > figure {
    padding-right: 1rem;
    display: flex;
    align-items: center;
  }

  > figure > img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Box1 = styled.div`
  width: 100%;

  .details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .details > p {
    font-size: small;
    color: ${(props) => props.theme.subtitle};
    font-family: "Baloo 2";
    font-weight: 500;
    font-size: 0.9rem;
  }

  .details > h4 {
    font-size: small;
    font-family: "Baloo 2";
    font-size: 0.9rem;
  }

  .buttons {
    display: flex;
    justify-content: baseline;
    gap: 0.5rem;
  }

  > div {
    > button {
      border: 0;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      background-color: ${(props) => props.theme.button};
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background-color: ${(props) => props.theme.hover};
      }
    }
  }

  .trash {
    color: ${(props) => props.theme.purple};
    margin-right: 0.25rem;
  }
`;
