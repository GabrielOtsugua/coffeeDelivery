import { FormData } from "../../../../interfaces";
import { PayMethodContainer } from "./style";
import { UseFormRegister } from "react-hook-form";

interface PayMethodProps {
  register: UseFormRegister<FormData>;
}

export function PayMethod({ register }: PayMethodProps) {
  return (
    <PayMethodContainer>
      <select {...register("payMethod")}>
        <option value="">Selecione...</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="QR Code">QR Code</option>
      </select>
    </PayMethodContainer>
  );
}
