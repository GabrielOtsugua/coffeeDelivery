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

    @media (max-width: 768px) {
      justify-content: center;
      margin-top: 4rem;
    }
  }

  figcaption > img {
    width: 25rem;

    @media (max-width: 640px) {
      width: 18rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Box1 = styled.div`
  h1 {
    color: ${(props) => props.theme.title};
    margin-bottom: 1rem;
    font-size: 2.25rem;

    @media (max-width: 640px) {
      font-size: 1.75rem;
    }

    @media (min-width: 1280px) {
      font-size: 2.5rem;
    }
  }

  p {
    margin-bottom: 3rem;
  }
`;

export const SectionContainer = styled.div`
  > h2 {
    color: ${(props) => props.theme.title};
    margin-bottom: 3rem;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 2.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
`;
