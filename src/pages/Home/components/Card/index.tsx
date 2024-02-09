import { Box1, Box2, CardContainer } from "./style";
import ExpressoTradicional from "../../../../assets/ExpressoTradicional.png";
import { ShoppingCart } from "@phosphor-icons/react";
import { Counter } from "../../../../components/Counter";

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
          <Counter />

          <span>
            <ShoppingCart size={16} weight="fill" />
          </span>
        </div>
      </Box2>
    </CardContainer>
  );
}
