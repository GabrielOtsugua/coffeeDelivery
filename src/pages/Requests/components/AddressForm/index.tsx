import { UseFormRegister } from "react-hook-form";
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
import { FormData } from "../../../../interfaces";

interface AddressFormProps {
  register: UseFormRegister<FormData>;
}

export function AddressForm({ register }: AddressFormProps) {
  return (
    <AddressContainer>
      <div>
        <ZipcodeInput
          {...register("zipcode")}
          type="number"
          placeholder="CEP"
        />
      </div>

      <div>
        <StreetInput {...register("street")} type="text" placeholder="Rua" />
      </div>

      <div className="optionalContainer">
        <NumberInput
          {...register("number")}
          type="number"
          placeholder="Número"
        />

        <ComplementInput
          {...register("complement")}
          type="text"
          placeholder="Complemento"
        />

        <span className="optional">
          <em>opcional</em>
        </span>
      </div>

      <div>
        <NeighborhoodInput
          {...register("neighborhood")}
          type="text"
          placeholder="Bairro"
        />

        <CityInput {...register("city")} type="text" placeholder="Cidade" />

        <UFInput
          {...register("UF")}
          type="text"
          placeholder="UF"
          maxLength={2}
        />
      </div>
    </AddressContainer>
  );
}
