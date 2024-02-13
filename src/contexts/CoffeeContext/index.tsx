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
  cartListUpdate: (id: string) => void;
}

interface ChildrenType {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: ChildrenType) {
  // --- FUNÇÕES E ESTADOS ---
  const [cartList, setCartList] = useState<Coffee[]>([]);

  const cartListUpdate = (id: string) => {
    const newCoffeeList = coffeeData.filter((item) => item.id === id);

    setCartList([...cartList, ...newCoffeeList]);
    console.log(cartList);
  };

  return (
    <CoffeeContext.Provider value={{ cartList, cartListUpdate }}>
      {children}
    </CoffeeContext.Provider>
  );
}
