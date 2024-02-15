import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../../../components/Counter";
import { Box1, RequestContainer } from "./style";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

interface RequestProps {
  id: string;
  image: string;
  type: string;
  price: number;
  amount: number;
}

export function Request(props: RequestProps) {
  const { cartListDelete } = useContext(CoffeeContext);

  const priceFormat = (props.price * props.amount)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  return (
    <RequestContainer>
      <figure>
        <img src={props.image} />
      </figure>

      <Box1>
        <div className="details">
          <p>{props.type}</p>
          <h4>{priceFormat}</h4>
        </div>

        <div className="buttons">
          <Counter id={props.id} amount={props.amount} />
          <button onClick={() => cartListDelete(props.id)}>
            <Trash size={12} className="trash" />
            Remover
          </button>
        </div>
      </Box1>
    </RequestContainer>
  );
}
