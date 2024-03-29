import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 4px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;

  figcaption {
    margin-bottom: 0.5rem;
    text-align: center;
    height: 30%;
  }

  figcaption > img {
    width: 5.5rem;
    translate: 0px -20px;
  }
`;

export const Box1 = styled.div`
  text-align: center;
  padding: 0 1rem 0 1rem;

  > span {
    font-size: 0.5rem;
    font-weight: 500;
    background-color: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.yellowDark};
    padding: 0.25rem;
    border-radius: 16px;
    margin-right: 4px;
  }

  > h4 {
    margin: 1rem 0 0.5rem 0;
    font-size: 1rem;
    color: ${(props) => props.theme.subtitle};
    font-family: "Baloo 2";
  }

  > p {
    font-size: 11px;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.label};
  }
`;

export const Box2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;

  > span {
    display: flex;
    align-items: end;
    font-size: small;
    font-family: "baloo 2";
  }

  > span p {
    font-size: large;
    font-weight: bold;
    padding-left: 0.25rem;
  }

  > div {
    display: flex;

    > strong {
      width: 2rem;
      height: 2rem;
      background-color: ${(props) => props.theme.button};
      color: ${(props) => props.theme.purpleDark};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      font-size: small;
    }
  }

  > div > span {
    background-color: ${(props) => props.theme.purpleDark};
    color: ${(props) => props.theme.white};
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    margin-left: 0.25rem;
    cursor: pointer;
    user-select: none;

    transition: 0.1s;

    &:hover {
      scale: 1.1;
      background-color: ${(props) => props.theme.purple};
    }
  }
`;
