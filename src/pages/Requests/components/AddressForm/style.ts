import styled from "styled-components";

export const AddressContainer = styled.form`
  position: relative;
  margin-top: 1.5rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;

  > small {
    position: absolute;
    top: -1.5rem;
    left: 0;
    color: red;
  }

  input {
    border: 1px solid ${(props) => props.theme.button};
    border-radius: 4px;
    background-color: ${(props) => props.theme.input};
    font-size: small;
    transition: 0.5s;

    &:focus {
      border: 1px solid ${(props) => props.theme.yellowDark};
    }
  }

  .optionalContainer {
    position: relative;
  }

  .optional {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: small;
    opacity: 0.6;
  }
`;

export const ZipcodeInput = styled.input`
  width: 30%;
  padding: 0.5rem;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 640px) {
    width: 50%;
  }
`;

export const StreetInput = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

export const NumberInput = styled.input`
  width: 30%;
  padding: 0.5rem;
  margin-right: 2%;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ComplementInput = styled.input`
  width: 68%;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  background-color: ${(props) => props.theme.yellow};
`;

export const NeighborhoodInput = styled.input`
  width: 30%;
  padding: 0.5rem;
  margin-right: 2%;
`;

export const CityInput = styled.input`
  width: 56%;
  padding: 0.5rem;
  margin-right: 2%;

  @media (max-width: 640px) {
    width: 50%;
  }
`;

export const UFInput = styled.input`
  width: 10%;
  padding: 0.5rem;

  @media (max-width: 640px) {
    width: 16%;
  }
`;
