import { DetailsBox, FinishedContainer } from "./style";
import Ilustração from "../../assets/Ilustração.png";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

export function Finished() {
  return (
    <FinishedContainer>
      <main>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <div>
          <DetailsBox>
            <figure>
              <MapPin size={12} weight="fill" />
            </figure>

            <span>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <small>Farrapos - Porto Alegre, RS</small>
            </span>
          </DetailsBox>

          <DetailsBox>
            <figure className="yellow">
              <Timer size={12} weight="fill" />
            </figure>

            <span>
              <p>Previsão de entrega</p>
              <small>
                <strong>20 min - 30 min</strong>
              </small>
            </span>
          </DetailsBox>

          <DetailsBox>
            <figure className="yellowDark">
              <CurrencyDollar size={12} />
            </figure>

            <span>
              <p>Pagamento na entrega</p>
              <small>
                <strong>Cartão de crédito</strong>
              </small>
            </span>
          </DetailsBox>
        </div>
      </main>

      <aside>
        <figure>
          <img src={Ilustração} />
        </figure>
      </aside>
    </FinishedContainer>
  );
}
