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

interface FormData {
  zipcode: number;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  UF: string;
  payMethod?: string;
}

interface CoffeeContextType {
  cartList: Coffee[];
  itensTotal: number;
  cartListAmount: number;
  formData: FormData;
  cartListUpdate: (id: string) => void;
  cartListDelete: (id: string) => void;
  decreaseAmount: (id: string) => void;
  increaseAmount: (id: string) => void;
  getFormData: (data: FormData) => void;
  definePayMethod: (payMethod: string) => void;
  clearCartList: () => void;
}

interface ChildrenType {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: ChildrenType) {
  // --- FUNÇÕES E ESTADOS ---

  const [cartList, setCartList] = useState<Coffee[]>([]);
  const [formData, setFormData] = useState<FormData>({} as FormData);

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

  const getFormData = (data: FormData) => {
    setFormData(data);
  };

  const definePayMethod = (payMethod: string) => {
    setFormData({ ...formData, payMethod: payMethod });
  };

  const clearCartList = () => {
    setCartList([]);
  };

  return (
    <CoffeeContext.Provider
      value={{
        cartList,
        itensTotal,
        cartListAmount,
        formData,
        cartListUpdate,
        cartListDelete,
        decreaseAmount,
        increaseAmount,
        getFormData,
        definePayMethod,
        clearCartList,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
