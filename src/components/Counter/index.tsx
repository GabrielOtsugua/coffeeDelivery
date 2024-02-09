import { Minus, Plus } from "@phosphor-icons/react";
import { CountContainer } from "./style";

export function Counter() {
  return (
    <CountContainer>
      <Minus size={12} className="minus" />
      <p>0</p>
      <Plus size={12} className="plus" />
    </CountContainer>
  );
}
