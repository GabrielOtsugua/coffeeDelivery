import styled from "styled-components";

export const FinishedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > main {
    > h2 {
      color: ${(props) => props.theme.yellowDark};
      margin-bottom: 0.5rem;
    }

    > p {
      margin-bottom: 2rem;
    }

    > div {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      border: 1px solid ${(props) => props.theme.yellow};
      border-radius: 8px;
    }
  }

  > aside {
    > figure {
      display: flex;
      justify-content: end;
      align-items: end;
      height: 100%;

      > img {
        width: 22rem;
        translate: 0 8px;

        @media (max-width: 640px) {
          width: 18rem;
        }
      }

      @media (max-width: 768px) {
        justify-content: center;
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  align-items: center;

  > figure {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
  }

  .yellow {
    background-color: ${(props) => props.theme.yellow};
  }

  .yellowDark {
    background-color: ${(props) => props.theme.yellowDark};
  }

  > span {
    > p {
      font-size: small;
    }

    > small {
    }
  }
`;
