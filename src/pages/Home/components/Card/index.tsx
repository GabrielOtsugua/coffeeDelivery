import { Box1, Box2, CardContainer, Count } from "./style";
import ExpressoTradicional from "../../../../assets/ExpressoTradicional.png";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export function Card() {
  return (
    <CardContainer>
      <figcaption>
        <img src={ExpressoTradicional} alt="" />
      </figcaption>

      <Box1>
        <span>TRADICIONAL</span>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moidos</p>
      </Box1>

      <Box2>
        <span>
          R$ <p>9,90</p>
        </span>

        <div>
          <Count>
            <button>
              <Minus size={12} />
            </button>
            <p>0</p>
            <button>
              <Plus size={12} />
            </button>
          </Count>
          <span>
            <ShoppingCart size={16} weight="fill" />
          </span>
        </div>
      </Box2>
    </CardContainer>
  );
}
