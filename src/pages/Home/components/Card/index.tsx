import { Box1, Box2, CardContainer } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
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
  const { cartList, cartListUpdate } = useContext(CoffeeContext);

  const priceFormat = props.price.toFixed(2).toString().replace(".", ",");

  const example = cartList.map((item) => item.id === props.id && item.amount);

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
          R$ <p>{priceFormat}</p>
        </span>

        <div>
          <strong>{example}</strong>

          <span onClick={() => cartListUpdate(props.id)}>
            <ShoppingCart size={16} weight="fill" />
          </span>
        </div>
      </Box2>
    </CardContainer>
  );
}
