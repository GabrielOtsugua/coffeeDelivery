import { PayMethod } from "./components/PayMethod";
import { AddressForm } from "./components/AddressForm";
import { Box1, Box2, Box3, Container } from "./style";
import { Request } from "./components/Request";
import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Requests() {
  const { cartList } = useContext(CoffeeContext);

  return (
    <Container>
      <main>
        <h5 className="titleMain">Complete seu pedido</h5>

        <Box1>
          <span>
            <MapPinLine size={16} />
            <p>Endereço de entrega</p>
          </span>
          <small>Informe o endereço onde deseja receber seu pedido</small>

          <AddressForm />
        </Box1>

        <Box2>
          <span>
            <CurrencyDollar size={16} />
            <p>Pagamento</p>
          </span>
          <small>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </small>

          <PayMethod />
        </Box2>
      </main>

      <aside>
        <h5 className="titleAside">Cafés selecionados</h5>

        <div className="requestContainer">
          {cartList.map((item) => (
            <Request
              image={item.image}
              type={item.type}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </div>

        <Box3>
          <div>
            <small>Total de itens</small>
            <p>29,70</p>
          </div>

          <div>
            <small>Entrega</small>
            <p>3,50</p>
          </div>

          <div>
            <h3>Total</h3>
            <h3>R$ 33,20</h3>
          </div>

          <Link to="/finished">
            <button>CONFIRMAR PEDIDO</button>
          </Link>
        </Box3>
      </aside>
    </Container>
  );
}
