import { createContext, useState } from "react";
import _ from "lodash";
import { Product, BasketContextType, BasketProviderType } from "../types";

export const BasketContext = createContext<BasketContextType | null>(null);

export function BasketProvider({ children }: BasketProviderType) {
  const [basket, setBasket] = useState<Product[]>([]);

  const groupedItems = _.groupBy(basket, "id");

  const total: number = basket.reduce((accumulator, currentValue: Product) => {
    return accumulator + currentValue.price;
  }, 0);

  const roundedTotal = (Math.round(total * 100) / 100).toFixed(2);

  function handleIncreaseClick(item: Product) {
    setBasket((oldBasket) => [...oldBasket, item]);
  }

  function handleDecreaseClick(item: Product) {
    setBasket((oldBasket) => {
      const index = oldBasket.findIndex(
        (basketItem) => basketItem.id === item.id
      );
      if (index > -1) {
        return [...oldBasket.slice(0, index), ...oldBasket.slice(index + 1)];
      }
      return oldBasket;
    });
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
