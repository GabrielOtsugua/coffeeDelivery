import styled from "styled-components";

export const EmptyCartContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > figure {
    color: ${(props) => props.theme.yellowDark};
  }

  > h2 {
    color: ${(props) => props.theme.yellowDark};
    margin-bottom: 0.5rem;
  }
`;
