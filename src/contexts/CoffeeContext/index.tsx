import { ReactNode, createContext, useEffect, useState } from "react";
import { coffeeData } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { Coffee, FormData } from "../../interfaces";

interface CoffeeContextType {
  cartList: Coffee[];
  itensTotal: number;
  cartListAmount: number;
  formData: FormData | undefined;
  cartListAdd: (id: string) => void;
  cartListDelete: (id: string) => void;
  decreaseAmount: (id: string) => void;
  increaseAmount: (id: string) => void;
  getFormData: (data: FormData) => void;
}

interface ChildrenType {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: ChildrenType) {
  // --- FUNÇÕES E ESTADOS ---

  const [cartList, setCartList] = useState<Coffee[]>([]);
  const [formData, setFormData] = useState<FormData>();

  const navigate = useNavigate();

  const itensTotal = cartList.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const cartListAmount = cartList.reduce(
    (total, item) => total + item.amount,
    0
  );

  const cartListAdd = (id: string) => {
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
    navigate("/finished");
    setCartList([]);
  };

  // ATUALIZA O CARTLIST COM OS ITENS DO LOCALSTORAGE, AO ATUALIZAR A PAGINA
  useEffect(() => {
    const storedCartList = localStorage.getItem("cartList");
    storedCartList && setCartList(JSON.parse(storedCartList));
  }, []);

  // DEFINE O LOCALSTORAGE, AO ATUALIZAR O CARTLIST
  useEffect(() => {
    cartList.length > 0
      ? localStorage.setItem("cartList", JSON.stringify(cartList))
      : localStorage.removeItem("cartList");
  }, [cartList]);

  return (
    <CoffeeContext.Provider
      value={{
        cartList,
        itensTotal,
        cartListAmount,
        formData,
        cartListAdd,
        cartListDelete,
        decreaseAmount,
        increaseAmount,
        getFormData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
