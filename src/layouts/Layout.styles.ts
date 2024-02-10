import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0 4rem 0;
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

  > img {
    width: 4rem;
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
    font-size: x-small;
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
`;
