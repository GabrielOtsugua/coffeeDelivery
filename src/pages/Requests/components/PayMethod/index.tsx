import { CreditCard, Money, QrCode } from "@phosphor-icons/react";
import { PayMethodContainer } from "./style";

export function PayMethod() {
  return (
    <PayMethodContainer>
      <button>
        <span>
          <CreditCard size={12} />
        </span>
        CARTÃO DE CRÉDITO
      </button>

      <button>
        <span>
          <Money size={12} />
        </span>
        DINHEIRO
      </button>

      <button>
        <span>
          <QrCode size={12} />
        </span>
        QR CODE
      </button>
    </PayMethodContainer>
  );
}
