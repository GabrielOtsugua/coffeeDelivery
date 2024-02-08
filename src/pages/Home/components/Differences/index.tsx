import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { Box1, Box2, Box3, Box4, BoxContainer } from "./styles";

export function Differences() {
  return (
    <BoxContainer>
      <Box1>
        <span>
          <ShoppingCart size={12} weight="fill" />
        </span>
        <p>Compra simples e segura</p>
      </Box1>

      <Box2>
        <span>
          <Package size={12} weight="fill" />
        </span>
        <p>Embalagem mantém o café intacto</p>
      </Box2>

      <Box3>
        <span>
          <Timer size={12} weight="fill" />
        </span>
        <p>Entrega rápida e rastreada</p>
      </Box3>

      <Box4>
        <span>
          <Coffee size={12} weight="fill" />
        </span>
        <p>O café chega fresquinho até você</p>
      </Box4>
    </BoxContainer>
  );
}
