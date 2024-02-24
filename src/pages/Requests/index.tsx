import {
  CurrencyDollar,
  MapPinLine,
  ShoppingCart,
} from "@phosphor-icons/react";
import { PayMethod } from "./components/PayMethod";
import { AddressForm } from "./components/AddressForm";
import { Box1, Box2, Box3, Container, EmptyCartList, Orders } from "./style";
import { Request } from "./components/Request";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "../../interfaces";
import { addressFormValidation } from "../../schemas";
import { Fade, Slide } from "react-awesome-reveal";

export function Requests() {
  const { handleSubmit, register, formState } = useForm<FormData>({
    resolver: zodResolver(addressFormValidation),
  });

  const { cartList, itensTotal, getFormData } = useContext(CoffeeContext);

  const totalItensFormat = itensTotal.toFixed(2).toString().replace(".", ",");
  const totalFormat = (itensTotal + 3.5)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  return cartList.length > 0 ? (
    <Fade>
      <Container>
        <main>
          <Slide>
            {/* <Slide> */}
            <Box1>
              <h5 className="titleMain">Complete seu pedido</h5>

              <span>
                <MapPinLine size={16} />
                <p>Endereço de entrega</p>
              </span>
              <small>Informe o endereço onde deseja receber seu pedido</small>

              <div className="errorsContainer">
                <small>{formState.errors.zipcode?.message}</small>
                <small>{formState.errors.street?.message}</small>
                <small>{formState.errors.number?.message}</small>
                <small>{formState.errors.neighborhood?.message}</small>
                <small>{formState.errors.city?.message}</small>
                <small>{formState.errors.UF?.message}</small>
              </div>

              <AddressForm register={register} />
            </Box1>

            <Box2>
              <span>
                <CurrencyDollar size={16} />
                <p>Pagamento</p>
              </span>
              <small>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </small>

              {formState.errors && (
                <div className="errorsContainer">
                  <small>{formState.errors.payMethod?.message}</small>
                </div>
              )}

              <PayMethod register={register} />
            </Box2>
            {/* </Slide> */}
          </Slide>
        </main>

        <aside>
          <Fade>
            <Slide direction="right">
              <Orders>
                <h5 className="titleAside">Cafés selecionados</h5>

                <div className="requestContainer">
                  {cartList.map((item) => (
                    <Request
                      key={item.id}
                      id={item.id}
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
                    <p>{totalItensFormat}</p>
                  </div>

                  <div>
                    <small>Entrega</small>
                    <p>3,50</p>
                  </div>

                  <div>
                    <h3>Total</h3>
                    <h3>R$ {totalFormat}</h3>
                  </div>

                  <button onClick={handleSubmit(getFormData)}>
                    CONFIRMAR PEDIDO
                  </button>
                </Box3>
              </Orders>
            </Slide>
          </Fade>
        </aside>
      </Container>
    </Fade>
  ) : (
    <Fade>
      <EmptyCartList>
        <div>
          <figure>
            <ShoppingCart size={48} weight="fill" />
          </figure>
          <h2>Seu carrinho está vazio</h2>
          <p>Para começar, adicione alguns itens do seu interesse</p>
        </div>
      </EmptyCartList>
    </Fade>
  );
}
