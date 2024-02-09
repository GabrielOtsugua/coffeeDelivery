import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1rem;

  main {
    position: relative;
    display: grid;
    grid-template-rows: 18.5rem 1fr;
    gap: 1rem;

    .titleMain {
      position: absolute;
      top: -2rem;
      left: 0;
      color: ${(props) => props.theme.title};
    }
  }

  aside {
    position: relative;
    background-color: ${(props) => props.theme.card};
    border-radius: 4px;
    padding: 2rem;
    align-self: baseline;

    .requestContainer {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .titleAside {
      position: absolute;
      top: -2rem;
      left: 0;
      color: ${(props) => props.theme.title};
    }
  }
`;

export const Box1 = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 4px;
  padding: 2rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.yellowDark};
  }

  > span > p {
    color: ${(props) => props.theme.text};
  }

  > small {
    margin-left: 1.5rem;
  }
`;

export const Box2 = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 4px;
  padding: 2rem;
  align-self: baseline;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.purple};
  }

  > span > p {
    color: ${(props) => props.theme.text};
  }

  > small {
    margin-left: 1.5rem;
  }
`;

export const Box3 = styled.div`
  margin-top: 1rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: small;
  }

  > button {
    width: 100%;
    border: 0;
    border-radius: 4px;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-size: x-small;
    padding: 0.75rem;
    margin-top: 1rem;
  }
`;
