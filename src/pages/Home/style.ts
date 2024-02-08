import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;

  figcaption {
    display: flex;
    justify-content: end;
    align-items: end;
  }

  figcaption > img {
    width: 22rem;
  }
`;

export const Box1 = styled.div`
  h1 {
    color: ${(props) => props.theme.title};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }
`;

export const SectionContainer = styled.div`
  h2 {
    color: ${(props) => props.theme.title};
    margin-bottom: 3rem;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 2.5rem;
  }
`;
