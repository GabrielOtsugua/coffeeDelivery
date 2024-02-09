import { Trash } from "@phosphor-icons/react";
import ExpressoTradicional from "../../../../assets/ExpressoTradicional.png";
import { Counter } from "../../../../components/Counter";
import { Box1, RequestContainer } from "./style";

export function Request() {
  return (
    <RequestContainer>
      <figure>
        <img src={ExpressoTradicional} />
      </figure>

      <Box1>
        <div className="details">
          <p>Expresso Tradicional</p>
          <h4>9,90</h4>
        </div>

        <div className="buttons">
          <Counter />
          <button>
            <Trash size={12} className="trash" />
            Remover
          </button>
        </div>
      </Box1>
    </RequestContainer>
  );
}
