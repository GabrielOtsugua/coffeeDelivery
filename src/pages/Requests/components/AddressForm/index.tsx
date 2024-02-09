import {
  AddressContainer,
  CityInput,
  ComplementInput,
  NeighborhoodInput,
  NumberInput,
  StreetInput,
  UFInput,
  ZipcodeInput,
} from "./style";

export function AddressForm() {
  return (
    <AddressContainer>
      <div>
        <ZipcodeInput type="text" placeholder="CEP" />
      </div>

      <div>
        <StreetInput type="text" placeholder="Rua" />
      </div>

      <div>
        <NumberInput type="text" placeholder="Número" />
        <ComplementInput type="text" placeholder="Complemento" />
      </div>

      <div>
        <NeighborhoodInput type="text" placeholder="Bairro" />
        <CityInput type="text" placeholder="Cidade" />
        <UFInput type="text" placeholder="UF" />
      </div>
    </AddressContainer>
  );
}
