import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
    width: 100%;
  }

  .asideAnimation {
    width: 100%;
  }

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 1rem;

    .titleMain {
      position: absolute;
      top: -2rem;
      left: 0;
      color: ${(props) => props.theme.title};
      font-family: "Baloo 2";
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  aside {
    position: relative;
    width: 40%;

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
      font-family: "Baloo 2";
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Box1 = styled.div`
  width: 100%;
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

    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  .errorsContainer {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    color: #ff6347;
  }
`;

export const Box2 = styled.div`
  width: 100%;
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

    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  .errorsContainer {
    margin-top: 0.5rem;
    color: #ff6347;
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

  h3 {
    font-family: "Baloo 2";
    font-size: 1.1rem;
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
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: ${(props) => props.theme.yellowDark};
    }
  }
`;

export const EmptyCartList = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    > figure {
      text-align: center;
    }

    > h2 {
      text-align: center;
      margin-top: 0.5rem;
      font-family: "Baloo 2";
    }

    p {
      text-align: center;
      margin-top: 0.5rem;
    }
  }
`;

export const Orders = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 4px;
  padding: 2rem;
  align-self: baseline;
  width: 100%;
`;
