import { Link, Outlet } from "react-router-dom";
import { Box1, Box2, Header, LayoutContainer } from "./Layout.styles";
import Logo from "../assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../contexts/CoffeeContext";

export function Layout() {
  const { cartListAmount } = useContext(CoffeeContext);

  return (
    <LayoutContainer>
      <Header>
        <Link to="/">
          <img src={Logo} />
        </Link>

        <div>
          <Box1>
            <MapPin size={16} weight="fill" />
            <p>Porto Alegre, RS</p>
          </Box1>

          <Link to={"/Requests"}>
            <Box2 title="Carrinho de compras">
              <span
                title={`${cartListAmount} item(s) no carrinho`}
                className="amount"
              >
                {cartListAmount}
              </span>
              <ShoppingCart size={16} weight="fill" />
            </Box2>
          </Link>
        </div>
      </Header>

      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
