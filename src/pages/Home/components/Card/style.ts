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
    font-size: 14px;
    color: ${(props) => props.theme.subtitle};
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
  }

  > span p {
    font-size: larger;
    font-weight: bold;
    padding-left: 0.25rem;
  }

  > div {
    display: flex;
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
  }
`;
