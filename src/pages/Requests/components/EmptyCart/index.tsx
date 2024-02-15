import { ShoppingBag } from "@phosphor-icons/react";
import { EmptyCartContainer } from "./style.ts";

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <figure>
        <ShoppingBag size={64} weight="regular" />
      </figure>
      <h2>Seu carrinho está vazio</h2>
      <p>Adicione alguns itens :)</p>
    </EmptyCartContainer>
  );
}
