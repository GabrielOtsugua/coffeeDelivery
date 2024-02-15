import styled from "styled-components";

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 1rem;
  font-size: small;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

export const Box1 = styled.div`
  span {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellowDark};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 640px) {
    margin-left: 1rem;
  }

  @media (min-width: 1280px) {
  }
`;

export const Box2 = styled.div`
  span {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.subtitle};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 640px) {
    margin-left: 2rem;
  }

  @media (min-width: 1280px) {
  }
`;

export const Box3 = styled.div`
  span {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 640px) {
    margin-left: 3rem;
  }

  @media (min-width: 1280px) {
  }
`;

export const Box4 = styled.div`
  span {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 640px) {
    margin-left: 4rem;
  }

  @media (min-width: 1280px) {
  }
`;
