import { Minus, Plus } from "@phosphor-icons/react";
import { CountContainer } from "./style";

interface CounterProps {
  amount: number;
}

export function Counter(props: CounterProps) {
  return (
    <CountContainer>
      <Minus size={12} className="minus" />
      <p>{props.amount}</p>
      <Plus size={12} className="plus" />
    </CountContainer>
  );
}
