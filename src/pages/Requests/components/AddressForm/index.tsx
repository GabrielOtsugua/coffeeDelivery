import { useForm } from "react-hook-form";
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
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

interface FormData {
  zipcode: number;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  UF: string;
}

export function AddressForm() {
  const { getFormData } = useContext(CoffeeContext);

  const { register, handleSubmit } = useForm<FormData>();

  return (
    <AddressContainer onChange={handleSubmit(getFormData)}>
      <div>
        <ZipcodeInput {...register("zipcode")} type="text" placeholder="CEP" />
      </div>

      <div>
        <StreetInput {...register("street")} type="text" placeholder="Rua" />
      </div>

      <div className="optionalContainer">
        <NumberInput
          {...register("number", { valueAsNumber: true })}
          type="text"
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
        <UFInput {...register("UF")} type="text" placeholder="UF" />
      </div>
    </AddressContainer>
  );
}
