import { CreditCard, Money, QrCode } from "@phosphor-icons/react";
import { PayMethodContainer } from "./style";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

export function PayMethod() {
  const { definePayMethod } = useContext(CoffeeContext);

  return (
    <PayMethodContainer>
      <button onClick={() => definePayMethod("Cartão de crédito")}>
        <span>
          <CreditCard size={12} />
        </span>
        CARTÃO DE CRÉDITO
      </button>

      <button onClick={() => definePayMethod("Dinheiro")}>
        <span>
          <Money size={12} />
        </span>
        DINHEIRO
      </button>

      <button onClick={() => definePayMethod("QR Code")}>
        <span>
          <QrCode size={12} />
        </span>
        QR CODE
      </button>
    </PayMethodContainer>
  );
}
