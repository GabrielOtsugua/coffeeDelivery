import { Link, Outlet } from "react-router-dom";
import { Box1, Box2, Header, LayoutContainer } from "./Layout.styles";
import Logo from "../assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../contexts/CoffeeContext";
import { Fade } from "react-awesome-reveal";

export function Layout() {
  const { cartListAmount } = useContext(CoffeeContext);

  return (
    <LayoutContainer>
      <Fade>
        <Header>
          <Link to="/">
            <img src={Logo} />
          </Link>

          <div>
            <Box1>
              <MapPin size={16} weight="fill" />
              <p>Porto Alegre, RS</p>
            </Box1>

            <Link to="/requests">
              <Box2 title="Carrinho de compras">
                {cartListAmount > 0 && (
                  <span
                    title={`${cartListAmount} item(s) no carrinho`}
                    className="amount"
                  >
                    {cartListAmount}
                  </span>
                )}
                <ShoppingCart size={16} weight="fill" />
              </Box2>
            </Link>
          </div>
        </Header>
      </Fade>

      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
