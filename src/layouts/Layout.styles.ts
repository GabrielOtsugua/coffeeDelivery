import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }

  @media (min-width: 1280px) {
    width: 64rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5rem;
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      scale: 1.1;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Box1 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};
  padding: 0.5rem;
  border-radius: 4px;

  p {
    font-size: 0.7rem;
    font-weight: 500;
    color: ${(props) => props.theme.purpleDark};
  }
`;

export const Box2 = styled.div`
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    scale: 1.1;
  }

  .amount {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${(props) => props.theme.yellowDark};
    color: ${(props) => props.theme.white};
    font-size: x-small;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
