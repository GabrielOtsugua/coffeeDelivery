import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../../../components/Counter";
import { Box1, RequestContainer } from "./style";

interface RequestProps {
  image: string;
  type: string;
  price: number;
  amount: number;
}

export function Request(props: RequestProps) {
  return (
    <RequestContainer>
      <figure>
        <img src={props.image} />
      </figure>

      <Box1>
        <div className="details">
          <p>{props.type}</p>
          <h4>{props.price}0</h4>
        </div>

        <div className="buttons">
          <Counter amount={props.amount} />
          <button>
            <Trash size={12} className="trash" />
            Remover
          </button>
        </div>
      </Box1>
    </RequestContainer>
  );
}
