import { createContext, useEffect, useState } from "react";
import _ from "lodash";
import localStorageCheck from "../utils/localStorageCheck";
import { Product, BasketContextType, BasketProviderType } from "../types";
import { testData } from "../utils/test-utils";

// Context used as main method of state management. Various components needed various access
// to data and functions e.g. Header.tsx needing the total and Add.tsx needing the
// handleIncreaseClick function, so Context was the most convenient way to organize the
// code and keep it tidy.

const basketStore = "cognitoBasket";

export const BasketContext = createContext<BasketContextType | null>(null);

export function BasketProvider({ children }: BasketProviderType) {
  const [basket, setBasket] = useState<Product[]>([]);

  // useEffect to sync basket items with local storage to preserve state across
  // refresh and browser closing.
  useEffect(() => {
    // Load test data if we are in TEST ENV so we can test the Consumers
    if (process.env.NODE_ENV === "test") {
      setBasket(testData);
    } else {
      // Local storage may be disabled so we need to check.
      if (localStorageCheck()) {
        const savedBasket = window.localStorage.getItem(basketStore);
        if (savedBasket) {
          setBasket(JSON.parse(savedBasket));
        }
      }
    }
  }, []);

  // Group for convenient quantity count in basket.
  const groupedItems = _.groupBy(basket, "name");

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
