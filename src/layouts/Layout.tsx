import { Outlet } from "react-router-dom";
import { Box1, Box2, Header, LayoutContainer } from "./Layout.styles";
import Logo from "../assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Layout() {
  return (
    <LayoutContainer>
      <Header>
        <img src={Logo} />

        <div>
          <Box1>
            <MapPin size={16} weight="fill" />
            <p>Porto Alegre, RS</p>
          </Box1>

          <Box2>
            <ShoppingCart size={16} weight="fill" />
          </Box2>
        </div>
      </Header>

      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
