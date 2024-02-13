import { Box1, Box2, CardContainer } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
import { Counter } from "../../../../components/Counter";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

interface CardProps {
  id: string;
  image: string;
  badges: string[];
  type: string;
  info: string;
  price: number;
  amount: number;
}

export function Card(props: CardProps) {
  const { cartListUpdate } = useContext(CoffeeContext);

  return (
    <CardContainer>
      <figcaption>
        <img src={props.image} alt="" />
      </figcaption>

      <Box1>
        {props.badges.map((item) => (
          <span>{item}</span>
        ))}
        <h4>{props.type}</h4>
        <p>{props.info}</p>
      </Box1>

      <Box2>
        <span>
          R$ <p>{props.price}0</p>
        </span>

        <div>
          <Counter amount={props.amount} />

          <span onClick={() => cartListUpdate(props.id)}>
            <ShoppingCart size={16} weight="fill" />
          </span>
        </div>
      </Box2>
    </CardContainer>
  );
}
