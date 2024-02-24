import { z } from "zod";

export const addressFormValidation = z.object({
  zipcode: z.string().length(8, "O campo CEP deve conter 8 dígitos"),
  street: z.string().min(1, "Informe a Rua"),
  number: z.string().min(1, "Informe o Número"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Informe o Bairro"),
  city: z.string().min(1, "Informe a Cidade"),
  UF: z.string().length(2, "O campo UF(estado) deve conter 2 caracteres"),
  payMethod: z.string().min(1, "Selecione uma forma de pagamento"),
});
