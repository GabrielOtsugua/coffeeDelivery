import { DetailsBox, FinishedContainer } from "./style";
import Ilustração from "../../assets/Ilustração.png";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { Fade } from "react-awesome-reveal";

export function Finished() {
  const { formData } = useContext(CoffeeContext);

  return (
    <Fade>
      <FinishedContainer>
        <main>
          <h2>Uhu! Pedido confirmado</h2>
          <Fade cascade duration={100} className="now">
            Agora é só aguardar que logo o café chegará até você!
          </Fade>

          <section>
            <DetailsBox>
              <figure>
                <MapPin size={12} weight="fill" />
              </figure>

              <span>
                <p>
                  Entrega em{" "}
                  <strong>
                    {formData?.street}, {formData?.number}
                  </strong>
                </p>
                <small>
                  {formData?.neighborhood} - {formData?.city}, {formData?.UF}
                </small>
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
                  <strong>{formData?.payMethod}</strong>
                </small>
              </span>
            </DetailsBox>
          </section>
        </main>

        <aside>
          <figure>
            <img src={Ilustração} />
          </figure>
        </aside>
      </FinishedContainer>
    </Fade>
  );
}
