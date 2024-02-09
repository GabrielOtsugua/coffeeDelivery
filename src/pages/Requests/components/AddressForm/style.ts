import styled from "styled-components";

export const AddressContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;

  input {
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.button};
    border-radius: 4px;
    background-color: ${(props) => props.theme.input};
    font-size: small;
  }
`;

export const ZipcodeInput = styled.input`
  width: 30%;
`;

export const StreetInput = styled.input`
  width: 100%;
`;

export const NumberInput = styled.input`
  width: 30%;
  margin-right: 2%;
`;

export const ComplementInput = styled.input`
  width: 68%;
`;

export const NeighborhoodInput = styled.input`
  width: 30%;
  margin-right: 2%;
`;

export const CityInput = styled.input`
  width: 56%;
  margin-right: 2%;
`;

export const UFInput = styled.input`
  width: 10%;
`;
