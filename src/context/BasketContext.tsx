import { createContext, useEffect, useState } from "react";
import _ from "lodash";
import localStorageCheck from "../components/utils/localStorageCheck";
import { Product, BasketContextType, BasketProviderType } from "../types";

const basketStore = "cognitoBasket";

export const BasketContext = createContext<BasketContextType | null>(null);

export function BasketProvider({ children }: BasketProviderType) {
  const [basket, setBasket] = useState<Product[]>([]);

  useEffect(() => {
    if (localStorageCheck()) {
      const savedBasket = window.localStorage.getItem(basketStore);
      if (savedBasket) {
        setBasket(JSON.parse(savedBasket));
      }
    }
  }, []);

  const groupedItems = _.groupBy(basket, "id");

  const total: number = basket.reduce((accumulator, currentValue: Product) => {
    return accumulator + currentValue.price;
  }, 0);

  const roundedTotal = (Math.round(total * 100) / 100).toFixed(2);

  function handleIncreaseClick(item: Product) {
    const newBasket = [...basket, item];
    setBasket(newBasket);
    localStorageCheck() &&
      window.localStorage.setItem(basketStore, JSON.stringify(newBasket));
  }

  function handleDecreaseClick(item: Product) {
    const index = basket.findIndex((basketItem) => basketItem.id === item.id);
    if (index > -1) {
      const newBasket = [...basket.slice(0, index), ...basket.slice(index + 1)];
      setBasket(newBasket);
      localStorageCheck() &&
        window.localStorage.setItem(basketStore, JSON.stringify(newBasket));
    }
  }

  return (
    <BasketContext.Provider
      value={{
        basket,
        groupedItems,
        roundedTotal,
        handleDecreaseClick,
        handleIncreaseClick,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
