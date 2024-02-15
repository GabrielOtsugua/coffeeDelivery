import { CountContainer } from "./style";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useContext } from "react";
import { Minus, Plus } from "@phosphor-icons/react";

interface CounterProps {
  id: string;
  amount: number;
}

export function Counter(props: CounterProps) {
  const { decreaseAmount, increaseAmount } = useContext(CoffeeContext);

  return (
    <CountContainer>
      <button onClick={() => decreaseAmount(props.id)}>
        <Minus size={12} width="bold" />
      </button>

      <p>{props.amount}</p>

      <button onClick={() => increaseAmount(props.id)}>
        <Plus size={12} width="bold" />
      </button>
    </CountContainer>
  );
}
