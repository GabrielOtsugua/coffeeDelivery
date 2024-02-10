import styled from "styled-components";

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  font-size: 11px;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
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
`;
