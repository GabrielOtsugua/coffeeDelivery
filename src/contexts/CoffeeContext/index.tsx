import { ReactNode, createContext, useState } from "react";
import { coffeeData } from "../../data/data";

interface Coffee {
  id: string;
  image: string;
  badges: string[];
  type: string;
  info: string;
  price: number;
  amount: number;
}

interface CoffeeContextType {
  cartList: Coffee[];
  itensTotal: number;
  cartListAmount: number;
  cartListUpdate: (id: string) => void;
  cartListDelete: (id: string) => void;
  decreaseAmount: (id: string) => void;
  increaseAmount: (id: string) => void;
}

interface ChildrenType {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: ChildrenType) {
  // --- FUNÇÕES E ESTADOS ---
  const [cartList, setCartList] = useState<Coffee[]>([]);

  const itensTotal = cartList.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const cartListAmount = cartList.reduce(
    (total, item) => total + item.amount,
    0
  );

  const cartListUpdate = (id: string) => {
    const coffee = coffeeData.find((item) => item.id === id);
    const coffeAlredyExists = cartList.find((item) => item.id === id);

    coffeAlredyExists
      ? setCartList(
          cartList.map((item) =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
          )
        )
      : coffee && setCartList([...cartList, coffee]);
  };

  const cartListDelete = (id: string) => {
    const cartListWithoutTheCoffee = cartList.filter((item) => item.id !== id);

    setCartList([...cartListWithoutTheCoffee]);
  };

  const decreaseAmount = (id: string) => {
    const coffeeDecreased = cartList.map((item) =>
      item.id === id
        ? {
            ...item,
            amount: item.amount > 1 ? item.amount - 1 : item.amount - 0,
          }
        : item
    );

    setCartList(coffeeDecreased);
  };

  const increaseAmount = (id: string) => {
    const coffeeIncreased = cartList.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );

    setCartList(coffeeIncreased);
  };

  return (
    <CoffeeContext.Provider
      value={{
        cartList,
        itensTotal,
        cartListAmount,
        cartListUpdate,
        cartListDelete,
        decreaseAmount,
        increaseAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
