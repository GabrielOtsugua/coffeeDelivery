import { Box1, Box2, CardContainer } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { v4 as uuidv4 } from "uuid";

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
  const { cartList, cartListAdd } = useContext(CoffeeContext);

  const priceFormat = props.price.toFixed(2).toString().replace(".", ",");

  const coffeeAmount = cartList.map(
    (item) => item.id === props.id && item.amount
  );

  return (
    <CardContainer>
      <figcaption>
        <img src={props.image} alt="" />
      </figcaption>

      <Box1>
        {props.badges.map((item) => (
          <span key={uuidv4()}>{item}</span>
        ))}
        <h4>{props.type}</h4>
        <p>{props.info}</p>
      </Box1>

      <Box2>
        <span>
          R$ <p>{priceFormat}</p>
        </span>

        <div>
          <strong>{coffeeAmount}</strong>

          <span onClick={() => cartListAdd(props.id)}>
            <ShoppingCart size={16} weight="fill" />
          </span>
        </div>
      </Box2>
    </CardContainer>
  );
}
